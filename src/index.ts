import { join } from "node:path"
import type { Options as PugOptions, LocalsObject } from "pug"
import type { Logger, Plugin } from "vite"
import { compileFile } from "pug"
import pc from "picocolors"
import { pugs } from "./lib"

interface PluginOptions extends PugOptions {
  /**
   * Look for pug files in the directory
   * of currently compiled index.html
   * (locally)
   * instead of project root.
   *
   * Can accept a function to determine the option per-html-file.
   */
  localImports?: boolean | ((htmlfile: string) => boolean)
}

export default function pugPlugin(options?: PluginOptions, locals?: LocalsObject): Plugin {
  return {
    name: "vite-plugin-pug",

    handleHotUpdate({ file, server }) {
      if (file.endsWith(".pug")) {
        server.config.logger.info(`${pc.red(`pug’s not hot`)} 🌭 ${pc.cyan(file)}`)
        server.ws.send({
          type: "full-reload"
        })
      }
    },

    // transform(code, id) {
    //   // server?.config.logger.info(htmlfile)
    //   console.log("QQQQQQQQQQQQQQQQQQQQQQQQQ", id)
    // },

    transformIndexHtml: {
      transform(html, { server, filename: htmlfile }) {
        // server?.config.logger.info(htmlfile)
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
              const filepath = join(filedir, filename)

              return compile(filepath)
            }

            return compile(filename)
          },
          server?.config.logger
        )
      }
    }
  }
}
