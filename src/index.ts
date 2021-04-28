import type { Logger, Plugin } from "vite"
import type { Options, LocalsObject } from "pug"
import { readdir, stat, readFile } from "fs/promises"
import { compileFile } from "pug"
import { join } from "path"
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

interface PluginOptions {
  /** Generate HTML pages based on the structure. */
  multiRoot?: string
}

export default function (options?: PluginOptions & Options, locals?: LocalsObject): Plugin {
  // function dirWalker(dir: string) {
  //   readdirSync(dir).forEach(file => {
  //     let filepath = join(dir, file)
  //     let stat = statSync(filepath)
  //     if (stat.isDirectory()) {
  //       dirWalker(filepath)
  //     } else {
  //       console.info(filepath + "\n")
  //     }
  //   })
  // }

  const plugin: Plugin = {
    name: "vite-plugin-pug",

    // build: {
    //   rollupOptions: {
    //     input: resolve(__dirname, "index.html"),
    //   },
    // },

    // renderChunk(code, chunkInfo, options) {
    //   // DIST JS FILES
    //   // console.log("RENDERCHUNK", chunkInfo.fileName)
    //   console.log("RENDERCHUNK", code)
    //   // if (ch)
    //   return "XXX"
    // },

    // transform(code, id) {
    //   if (id.endsWith(".html")) {
    //     // console.log("TRANSFORM", code)
    //     return "BOOOBOOBHTML"
    //   }
    //   return undefined
    // },

    // generateBundle(options, bundle) {
    //   this.emitFile({ type: "asset", fileName: "lolkabolka/index.html", source: "BROAFFFF" })
    // },

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
    const lastDir = options.multiRoot.split("/").pop()!
    const pugToNormHtml = (path: string) => `${path.slice(path.indexOf(lastDir) + lastDir.length + 1, -3)}html`

    plugin.generateBundle = async function () {
      const template = (await readFile("./index.html", { encoding: "utf8" })).split(/(id=["']app["'].*>)/)
      const templateEnd = template.pop()

      const dirWalker = async (dir: string) => {
        await Promise.all(
          (await readdir(dir)).map(async file => {
            let path = join(dir, file)
            if ((await stat(path)).isDirectory()) {
              return dirWalker(path)
            } else {
              const fileName = pugToNormHtml(path)
              const source = [...template, await readFile(path, { encoding: "utf8" }), templateEnd].join("")
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
