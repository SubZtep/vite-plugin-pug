import type { Logger, Plugin } from "vite"
import type { Options, LocalsObject } from "pug"
import { isPug } from "./lib"
import { compileFile } from "pug"

/** @deprecated */
type PluginOptions = Options & {
  localImports?: boolean | ((htmlfile: string) => boolean)
}

interface Props {
  /** Pug compiler options — https://pugjs.org/api/reference.html#options */
  options?: Options

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

/**
 * Main plugin. Single object prop is the way.
 */
function PugPlugin({ options, locals, localImports }?: Props): Plugin
function PugPlugin(options?: PluginOptions, locals?: LocalsObject): Plugin {
  return {
    name: "vite-plugin-pug",

    handleHotUpdate({ file, server }) {
      if (isPug(file)) {
        server.config.logger.info(`pug’s not hot 🌭 ${file}`)
        server.ws.send({ type: "full-reload" })
      }
    },

    transformIndexHtml: {
      transform(html, { server, filename: htmlfile }) {
        return resolvePugTag(
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

export default PugPlugin

export function resolvePugTag(html: string, pugger: (filename: string) => string, logger?: Pick<Logger, "warn">) {
  // TODO: if src is missing, use the tag content string as pug string
  return html.replace(/<pug.+?(file|src)="(.+?)".*?\/.*?>/gi, (_tag: string, attr: string, filename: string) => {
    return pugger(filename)
  })
}
