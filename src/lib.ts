import type { Logger } from "vite"
import pc from "picocolors"

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
