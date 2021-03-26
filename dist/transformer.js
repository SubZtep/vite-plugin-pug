import { compileClientWithDependenciesTracked, compileFile } from "pug";
import { readFileSync } from "node:fs";
import { normalizePath } from "vite";
export const composeTemplate = (html, options, locals) => {
    const hots = [];
    const parsed = html.replace(/<pug.+?file="(.+?)".*?\/.*?>/gi, (tag, filename) => {
        const um = tag.match(/update=['"]{1}(.+?)['"]{1}/i);
        if (um !== null) {
            hots.push({
                main: filename.replace(/^\/|\.\//, ""),
                query: um[1],
                dependencies: [
                    ...new Set(compileClientWithDependenciesTracked(readFileSync(filename).toString(), {
                        ...options,
                        filename,
                    }).dependencies.map(fn => normalizePath(fn))),
                ],
            });
        }
        return compileFile(filename, options)(locals);
    });
    return [hots, parsed];
};
export const injectScript = (hots, html, virtualFileId) => {
    if (virtualFileId.length === 0 || hots.length === 0) {
        return html;
    }
    const script = `<script type="module" src="${virtualFileId}"></script>`;
    const pos = html.indexOf("</head>");
    if (pos === -1) {
        return html + script;
    }
    return [html.slice(0, pos), script, html.slice(pos)].join("");
};
