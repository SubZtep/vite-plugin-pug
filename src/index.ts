import { join } from "path"
import type { Options, LocalsObject } from "pug"
import type { Logger, Plugin } from "vite"
import { compileFile } from "pug"
import pc from "picocolors"

export type PluginOptions = Options & {
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

export function pugs(html: string, pugger: (filename: string) => string, logger?: Pick<Logger, "warn">) {
  return html.replace(/<pug.+?(file|src)="(.+?)".*?\/.*?>/gi, (_tag: string, attr: string, filename: string) => {
    if (attr === "file" && logger) {
      logger.warn(
        `${pc.red(`the ${pc.bold(`file`)} attribute is deprecated,`)} ${pc.cyan(
          `please include ${pc.italic(filename)} with ${pc.bold(`src`)} instead`
        )}`
      )
    }
    return pugger(filename)
  })
}

export default function (options?: PluginOptions, locals?: LocalsObject): Plugin {
  return {
    name: "vite-plugin-pug",

    handleHotUpdate({ file, server }) {
      if (file.endsWith(".pug")) {
        server.config.logger.info(`${pc.red(`pug’s not hot`)} 🌭 ${pc.cyan(file)}`)
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
              const filepath = join(filedir, filename)

              return compile(filepath)
            }

            return compile(filename)
          },
          server?.config.logger
        )
      },
    },
  }
}
