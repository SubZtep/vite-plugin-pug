import type { Logger, Plugin } from "vite"
import type { Options, LocalsObject } from "pug"
import { readdir, stat, readFile } from "fs/promises"
import { compileFile } from "pug"
import { join } from "path"
import chalk from "chalk"

function pugToNormHtml(rootDir: string, pugPath: string) {
  const lastDir = rootDir.split("/").pop()!
  return `${pugPath.slice(pugPath.indexOf(lastDir) + lastDir.length + 1, -3)}html`
}

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

interface PluginOptions {
  /** Generate HTML pages based on the structure. */
  multiRoot?: string
}

export default function (options?: PluginOptions & Options, locals?: LocalsObject): Plugin {
  const plugin: Plugin = {
    name: "vite-plugin-pug",

    load(id) {
      if (id.endsWith(".pug.js")) {
        return `export const html = "${compileFile("." + id.slice(0, -3), options)(locals).replace('"', '\\"')}"`
      }
    },

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

  if (options?.multiRoot) {
    plugin.generateBundle = async function () {
      let template = await readFile("./index.html", { encoding: "utf8" })
      template = pugs(template, filename => compileFile(filename, options)(locals), console)

      const templateParts = template.split(/(id=["']app["'].*>)/)
      const templateEnd = templateParts.pop()

      const dirWalker = async (dir: string) => {
        await Promise.all(
          (await readdir(dir)).map(async file => {
            let path = join(dir, file)
            if ((await stat(path)).isDirectory()) {
              return dirWalker(path)
            } else {
              const fileName = pugToNormHtml(options.multiRoot!, path)
              const source = [...templateParts, await readFile(path, { encoding: "utf8" }), templateEnd].join("")
              this.emitFile({ type: "asset", fileName, source })
            }
          })
        )
      }
      await dirWalker(options.multiRoot!)
    }
  }

  return plugin
}
