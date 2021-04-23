import type { Options, LocalsObject } from "pug"
import type { Logger, Plugin } from "vite"
import { compileFile } from "pug"
import chalk from "chalk"

export function pugs(html: string, pugger: (filename: string) => string, logger?: Pick<Logger, "warn">) {
  return html.replace(/<pug.+?(file|src)="(.+?)".*?\/.*?>/gi, (_tag: string, attr: string, filename: string) => {
    if (attr === "file" && logger) {
      logger.warn(
        chalk`{red the {bold file} attribute is deprecated,} {cyan please include {italic ${filename}} with {bold src} instead}`
      )
    }
    return pugger(filename)
  })
}

export default function (options?: Options, locals?: LocalsObject): Plugin {
  return {
    name: "vite-plugin-pug",

    handleHotUpdate({ file, server }) {
      if (file.endsWith(".pug")) {
        server.config.logger.info(chalk`{redBright pug’s not hot} 🌭 {cyan ${file}}`)
        server.ws.send({
          type: "full-reload",
        })
      }
    },

    transformIndexHtml: {
      transform(html, { server }) {
        return pugs(html, filename => compileFile(filename, options)(locals), server?.config.logger)
      },
    },
  }
}
