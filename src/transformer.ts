import type { Options, LocalsObject } from "pug"
import { compileClientWithDependenciesTracked, compileFile } from "pug"
import { readFileSync } from "fs"
import { normalizePath } from "vite"

export const composeTemplate = (html: string, options?: Options, locals?: LocalsObject): [HotPug[], string] => {
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
  return [hots, parsed]
}

export const injectScript = (hots: HotPug[], html: string, virtualFileId: string) => {
  if (virtualFileId.length === 0 || hots.length === 0) {
    return html
  }

  const script = `<script type="module" src="${virtualFileId}"></script>`
  const pos = html.indexOf("</head>")

  if (pos === -1) {
    return html + script
  }
  return [html.slice(0, pos), script, html.slice(pos)].join("")
}
