import { compileClientWithDependenciesTracked, compileFile } from "pug";
import { readFileSync } from "fs";
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
    return [parsed, hots];
};
