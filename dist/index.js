import chalk from "chalk";
import { compileFile } from "pug";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import { readFile } from "fs/promises";
import { composeTemplate } from "./transformer.js";
export default (options, locals) => {
    const virtualFileId = "@pug-updater";
    let hotPugs;
    return {
        name: "vite-plugin-pug",
        load(id) {
            if (id.endsWith(virtualFileId)) {
                return readFile(fileURLToPath(join(dirname(import.meta.url), "hot.js")), { encoding: "utf8" });
            }
        },
        handleHotUpdate({ file, server }) {
            if (file.startsWith(server.config.root) && file.endsWith(".pug")) {
                const hotFile = file.slice(server.config.root.length).replace(/^\//, "");
                const data = hotPugs
                    .filter(({ main, dependencies }) => [main, ...dependencies].includes(hotFile))
                    .map(({ main, query }) => [compileFile(main, options)(locals), query]);
                if (data.length === 0) {
                    server.config.logger.info(chalk `{redBright Pug’s Not Hot:} {cyan ${hotFile}}`);
                    server.ws.send({
                        type: "full-reload",
                    });
                    return;
                }
                server.config.logger.info(chalk `{greenBright Hot Pug:} {cyan ${hotFile}}`);
                server.ws.send({
                    type: "custom",
                    event: "pug-update",
                    data,
                });
                return [];
            }
        },
        transformIndexHtml: {
            transform(html) {
                const [puglessHtml, hots] = composeTemplate(html, options, locals);
                if (hots.length === 0) {
                    return puglessHtml;
                }
                hotPugs = hots;
                const script = `<script type="module" src="${virtualFileId}"></script>`;
                const pos = puglessHtml.indexOf("</head>");
                if (pos === -1) {
                    return puglessHtml + script;
                }
                return [puglessHtml.slice(0, pos), script, puglessHtml.slice(pos)].join("");
            },
        },
    };
};
