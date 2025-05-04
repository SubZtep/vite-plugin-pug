import { join } from "node:path"
import type { Options as PugOptions, LocalsObject } from "pug"
import type { Logger, Plugin } from "vite"
import { compileFile } from "pug"
import pc from "picocolors"

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
  enableHMR?: boolean // New option to enable HMR
}

const pugModules = new Map()

export function pugs(html: string, pugger: (filename: string) => string, logger?: Pick<Logger, "warn">) {
  return html.replace(/<pug.+?(file|src)="(.+?)".*?\/.*?>/gi, (_tag: string, attr: string, filename: string) => {
    if (attr === "file" && logger) {
      logger.warn(
        `${pc.red(`the ${pc.bold("file")} attribute is deprecated,`)} ${pc.cyan(
          `please include ${pc.italic(filename)} with ${pc.bold("src")} instead`
        )}`
      )
    }
    return pugger(filename)
  })
}

export default function pugPlugin(options?: PluginOptions, locals?: LocalsObject): Plugin {
  const enableHMR = options?.enableHMR ?? false

  return {
    name: "vite-plugin-pug",

    configureServer(server) {
      if (enableHMR) {
        // Tracking changes in .pug files
        server.watcher.on("change", path => {
          if (path.endsWith(".pug")) {
            const modules = server.moduleGraph.getModulesByFile(path)
            if (modules) {
              const timestamp = Date.now()
              modules.forEach(mod => {
                pugModules.set(mod.id, timestamp)
                server.moduleGraph.invalidateModule(mod)
              })
            }
          }
        })
      }
    },

    handleHotUpdate({ file, server, modules }) {
      if (file.endsWith(".pug")) {
        if (enableHMR) {
          const updatedModules = modules.filter(m => m.file?.endsWith(".pug"))
          if (updatedModules.length > 0) {
            return updatedModules
          }
        }

        // If HMR is disabled or could not be applied, do a hard reload
        server.ws.send({
          type: "full-reload"
        })
      }
    },

    transform(code, id) {
      if (id.endsWith(".pug")) {
        const compiled = compileFile(id, options)(locals)
        return {
          code: `export default ${JSON.stringify(compiled)}`,
          map: null
        }
      }
    },

    transformIndexHtml(html, { server, filename: htmlfile }) {
      return pugs(
        html,
        filename => {
          const compile = (filepath: string) => {
            const compiled = compileFile(filepath, options)(locals)
            if (enableHMR) {
              pugModules.set(filepath, Date.now())
            }
            return compiled
          }

          if (
            (typeof options?.localImports === "function" && options.localImports(htmlfile)) ||
            options?.localImports
          ) {
            const filedir = htmlfile.replace(/(.*)[\\\/].*\.html$/, "$1")
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
