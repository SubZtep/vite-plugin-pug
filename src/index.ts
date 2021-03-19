// import chalk from "chalk"
import { dirname } from "path"
import { readFileSync } from "fs"
import { readFile } from "fs/promises"
import { normalizePath } from "vite"
import type { HmrContext, Plugin } from "vite"
import type { Options, LocalsObject } from "pug"
import { compileClientWithDependenciesTracked, compileFile } from "pug"

const hmrs: HMRs = {}

const compilePugFile = (options?: Options, locals?: LocalsObject) => (tag: string, filename: string) => {
  const um = tag.match(/update=['"]{1}(.+?)['"]{1}/i)
  if (um !== null) {
    hmrs[filename.replace(/^\/|\.\//, "")] = {
      query: um[1],
      dependencies: [
        ...new Set<string>(
          compileClientWithDependenciesTracked(readFileSync(filename).toString(), {
            ...options,
            filename,
          }).dependencies.map(fn => normalizePath(fn))
        ),
      ],
    }
  }
  return compileFile(filename, options)(locals)
}

// FIXME: rewire instead of export for jest(?)
export const composeTemplate = (html: string, replacer: (tag: string, filename: string) => string) => {
  return html.replace(/<pug.+?file="(.+?)".*?\/.*?>/gi, replacer)
}

const rootPugsQueries = (filename: string): [string, string][] =>
  Object.entries(hmrs).reduce((acc: [string, string][], [key, val]) => {
    if (key === filename || val.dependencies.includes(filename)) {
      acc.push([key, val.query])
    }
    return acc
  }, [])

export default (options?: Options, locals?: LocalsObject): Plugin => {
  const virtualFileId = "@pug-updater"

  return {
    name: "vite-plugin-pug",

    load(id) {
      if (id.endsWith(virtualFileId)) {
        return readFile(normalizePath(dirname(import.meta.url.split("//").pop()!) + "/hot.js"), "utf8")
      }
    },

    handleHotUpdate({ file, server }: HmrContext) {
      if (file.startsWith(server.config.root) && file.endsWith(".pug")) {
        const hotFile = file.slice(server.config.root.length).replace(/^\//, "")
        const data = rootPugsQueries(hotFile).map(([filename, mediaQuery]) => [
          compileFile(filename, options)(locals),
          mediaQuery,
        ])

        if (data.length === 0) {
          // server.config.logger.info(`${chalk.redBright("Pug’s Not Hot:")} ${chalk.cyan(hotFile)}`)
          server.config.logger.info(`Pug’s Not Hot: ${hotFile}`)
          server.ws.send({
            type: "full-reload",
          })
          return
        }

        // server.config.logger.info(`${chalk.greenBright("Hot Pug:")} ${chalk.cyan(hotFile)}`)
        server.config.logger.info(`Hot Pug: ${hotFile}`)
        server.ws.send({
          type: "custom",
          event: "pug-update",
          data,
        })
        return []
      }
    },

    transformIndexHtml: {
      transform(html) {
        const pugless = composeTemplate(html, compilePugFile(options, locals))
        const script = `<script type="module" src="${virtualFileId}"></script>`
        const pos = pugless.indexOf("</head>")

        if (pos === -1) {
          return pugless + script
        }

        return [pugless.slice(0, pos), script, pugless.slice(pos)].join("")
      },
    },
  }
}
