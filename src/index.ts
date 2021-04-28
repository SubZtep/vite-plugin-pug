import type { Options, LocalsObject } from "pug"
import type { Logger, Plugin } from "vite"
import { compileFile } from "pug"
import { resolve } from "path"
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
  const virtualPugId = "@pug"

  return {
    name: "vite-plugin-pug",

    // transform(src, id) {
    //   // console.log("TRANSFORM", [src, id])
    //   console.log("TRANSFORM", [id])
    //   return undefined
    // },

    // augmentChunkHash(c) {
    //   if (c.facadeModuleId) {
    //     console.log(c.facadeModuleId)
    //   }
    // },

    renderChunk(code, chunkInfo, options) {
      // DIST JS FILES
      // console.log("RENDERCHUNK", chunkInfo.fileName)
      console.log("RENDERCHUNK", code)
      // if (ch)
      return "XXX"
    },

    transform(code, id) {
      if (id.endsWith(".html")) {
        // console.log("TRANSFORM", code)
        return "BOOOBOOBHTML"
      }
      return undefined
    },

    // renderDynamicImport(x) {
    //   console.log("RENDERDYNAMICIMPORT", x)
    //   return "LLLLOOL"
    // },

    // emitFile(emittedFile) {
    //   console.log("EMITFILE", emittedFile)
    //   return "qwer"
    // },

    generateBundle(options, bundle) {
      // console.log("GENERATEBUNDLE OPTIONS", options)
      // console.log("GENERATEBUNDLE BUNDLE", bundle)

      console.log(bundle)

      // this.emitFile({ type: "asset", fileName: resolve(__dirname, "munkatarsak/peti/index.html"), source: "BROAFFFF" })


      // this.emitFile = (emittedFile) {
      //   console.log("EMITFILE", emittedFile)
      //   return "qwer"
      // }

      this.emitFile({ type: "asset", fileName: "lolkabolka/index.html", source: "BROAFFFF" })

      // Object.keys(bundle).forEach(filename => {
      //   const chunk = bundle[filename] as any /*as PreRenderedChunk*/
      //   let id = chunk.facadeModuleId
      //   if (id?.startsWith("@") && id.endsWith(".html")) {
      //     // this.emitFile({ type: "asset", fileName: id.slice(1), source: "BROAFFFF" })

      //     // delete bundle[filename]

      //     this.emitFile({ type: "asset", fileName: "lolkabolka/index.html", source: "BROAFFFF" })

      //     // // chunk.modules[id.slice(1)] = { ...chunk.modules[id] }
      //     // chunk.modules[id.slice(1)] = chunk.modules[id]
      //     // chunk.modules[id.slice(1)].code = "QQQWWWQQQ"
      //     // delete chunk.modules.id
      //     // // id = id.slice(1)
      //     // console.log("generatebundle", chunk.name)
      //     // chunk.name = id.slice(1)
      //   }
      // })


      // Object.keys(bundle).forEach(filename => {
      //   console.log("GENERATEBUNDLE", filename)
      //   // const b = bundle[filename]
      //   // if (b.facadeModuleId?.endsWith(".html")) {
      //   //   console.log(b.modules[b.facadeModuleId])
      //   // }
      // })
    },

    // writeBundle(options, bundle) {
    //   Object.keys(bundle).filter(filename => filename.endsWith(".html")).forEach(filename => {
    //     bundle[filename].source = "XXXYYYZZZ"
    //   })
    // },


    resolveId(id) {
      console.log("RESOLVEID", id)
      if (id === virtualPugId) {
        return virtualPugId
      }

      if (id.includes("lolkabolka")) {
        return `@${id}`
      }
    },

    load(id) {
      console.log("LOAD", id)
      if (id === virtualPugId) {
        return `export const locals = ${JSON.stringify(locals)}`
      }

      if (id.endsWith(".pug.js")) {
        return `export const html = "${compileFile("." + id.slice(0, -3), options)(locals).replace('"', '\\"')}"`
      }

      if (id.startsWith("@") && id.endsWith(".html")) {
        return "XXXXXXXXXX"
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
}
