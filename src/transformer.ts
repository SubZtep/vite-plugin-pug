import type { Options, LocalsObject } from "pug"
import { compileClientWithDependenciesTracked, compileFile } from "pug"
import { readFileSync } from "fs"
import { normalizePath } from "vite"

export const composeTemplate = (html: string, options?: Options, locals?: LocalsObject): [string, HotPug[]] => {
  const hots: HotPug[] = []
  const parsed = html.replace(/<pug.+?file="(.+?)".*?\/.*?>/gi, (tag: string, filename: string) => {
    const um = tag.match(/update=['"]{1}(.+?)['"]{1}/i)
    if (um !== null) {
      hots.push({
        main: filename.replace(/^\/|\.\//, ""),
        query: um[1],
        dependencies: [
          ...new Set<string>(
            compileClientWithDependenciesTracked(readFileSync(filename).toString(), {
              ...options,
              filename,
            }).dependencies.map(fn => normalizePath(fn))
          ),
        ],
      })
    }
    return compileFile(filename, options)(locals)
  })
  return [parsed, hots]
}
