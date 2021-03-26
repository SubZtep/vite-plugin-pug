import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { readFile } from "node:fs/promises";
import { composeTemplate, injectScript } from "./transformer.js";
import { hotUpdate } from "./hot-update.js";
import { cacheVersion } from "./cache.js";
export default (options, locals) => {
    const virtualFileId = "@pug-updater";
    let hotPugs;
    return {
        name: "vite-plugin-pug",
        load(id) {
            if (id.endsWith(virtualFileId)) {
                const jsPath = fileURLToPath(join(dirname(import.meta.url), "hot.client.js"));
                return readFile(jsPath, { encoding: "utf8" });
            }
        },
        handleHotUpdate: hotUpdate(hotPugs, options, locals),
        transformIndexHtml: {
            transform(html) {
                let puglessHtml;
                [hotPugs, puglessHtml] = composeTemplate(html, options, locals);
                hotPugs.forEach(cacheVersion);
                return injectScript(hotPugs, puglessHtml, virtualFileId);
            },
        },
    };
};
