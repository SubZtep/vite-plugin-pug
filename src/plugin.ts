import type { Logger, Plugin } from "vite"
import type { Options, LocalsObject } from "pug"
// import { join } from "node:path"
import { isPug } from "./lib"
import { compileFile } from "pug"

type PluginOptions = Options & {
  /**
   * Search Pug files in the directory of currently compiled
   * index.html (locally) instead of project root. \
   * Can accept a function to determine the option per-html-file. _(wat?xD)_
   */
  localImports?: boolean | ((htmlfile: string) => boolean)
}

interface Props {
  /** Pug compiler options — https://pugjs.org/api/reference.html#options */
  options?: PluginOptions

  /** Pug enviroment, key/value object with local variables */
  locals?: LocalsObject

  /**
   * Search Pug files in the directory of currently compiled
   * index.html (locally) instead of project root. \
   * Can accept a function to determine the option per-html-file. \
   * **TODO: _(wat?xD)_**
   */
   localImports?: boolean | ((htmlfile: string) => boolean)
}

export default function ({ options, locals, localImports }: Props): Plugin {
  return {
    name: "vite-plugin-pug",

    handleHotUpdate({ file, server }) {
      if (isPug(file)) {
        server.config.logger.info(`pug’s not hot 🌭 ${file}`)
        server.ws.send({
          type: "full-reload",
        })
      }
    },

    transformIndexHtml: {
      transform(html, { server, filename: htmlfile }) {
        return pugs(
          html,
          filename => {
            const compile = (filepath: string) => compileFile(filepath, options)(locals)
            if (
              (typeof options?.localImports === "function" && options.localImports(htmlfile)) ||
              options?.localImports
            ) {
              // extract current directory from the html file path
              const filedir = htmlfile.replace(/(.*)[\\\/].*\.html$/, "$1")

              // apply current directory to the pug file imported from html
              // const filepath = join(filedir, filename)
              const filepath = `${filedir}/${filename}`

              return compile(filepath)
            }

            return compile(filename)
          },
          server?.config.logger,
        )
      },
    },
  }
}

export function pugs(html: string, pugger: (filename: string) => string, logger?: Pick<Logger, "warn">) {
  return html.replace(/<pug.+?(file|src)="(.+?)".*?\/.*?>/gi, (_tag: string, attr: string, filename: string) => {
    return pugger(filename)
  })
}
