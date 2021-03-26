import { compileFile } from "pug"
import chalk from "chalk"

export const hotUpdate: HotUpdate = (hotPugs, options, locals) => ({ file, server }) => {
  if (file.startsWith(server.config.root) && file.endsWith(".pug")) {
    const hotFile = file.slice(server.config.root.length).replace(/^\//, "")

    const data = hotPugs!
      .filter(({ main, dependencies }) => [main, ...dependencies].includes(hotFile))
      .map(hot => {
        console.log("HOT", hot)
        //TODO: compare cached
        return hot
      })
      .map(({ main, query }) => [compileFile(main, options)(locals), query])

    if (data.length === 0) {
      server.config.logger.info(chalk`{redBright Pug’s Not Hot:} {cyan ${hotFile}}`)
      server.ws.send({
        type: "full-reload",
      })
      return
    }

    server.config.logger.info(chalk`{greenBright Hot Pug:} {cyan ${hotFile}}`)
    server.ws.send({
      type: "custom",
      event: "pug-update",
      data,
    })
    return []
  }
}
