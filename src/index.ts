import { fileURLToPath } from "url"
import { dirname, join } from "path"
import { readFile } from "fs/promises"
import type { Plugin } from "vite"
import type { Options, LocalsObject } from "pug"
import { composeTemplate, injectScript } from "./transformer.js"
import { hotUpdate } from "./hot-update.js"
import { cache } from "./cache.js"
import { toAst } from "./diff.js"

export default (options?: Options, locals?: LocalsObject): Plugin => {
  const virtualFileId = "@pug-updater"
  let hotPugs: HotPug[] | undefined

  return {
    name: "vite-plugin-pug",

    /** Inject `hot.client.js` change listener content to the browser page */
    load(id) {
      if (id.endsWith(virtualFileId)) {
        const jsPath = fileURLToPath(join(dirname(import.meta.url), "hot.client.js"))
        return readFile(jsPath, { encoding: "utf8" })
      }
    },

    handleHotUpdate(ctx) {
      if (hotPugs && hotPugs.length > 0) {
        return hotUpdate(ctx, hotPugs, options, locals)
      }
    },

    transformIndexHtml: {
      transform(html) {
        let puglessHtml: string
        ;[hotPugs, puglessHtml] = composeTemplate(html, options, locals)
        console.log("xxsxxdssasxxxxxz")
        hotPugs.forEach(({ main }) => cache.set(main, toAst(main)))
        return injectScript(hotPugs, puglessHtml, virtualFileId)
      },
    },
  }
}
