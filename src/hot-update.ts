import type { HmrContext } from "vite"
import type { LocalsObject, Options } from "pug"
import { compileFile } from "pug"
import chalk from "chalk"
import { EditOption, XTree } from "@dovyih/x-tree-diff-plus"
import { cache } from "./cache.js"
import { treeIndices, PugAstDiff, toAst, diffWalker, dequoter } from "./diff.js"

export const hotUpdate = (
  { file, server }: HmrContext,
  hotPugs: HotPug[],
  options?: Options,
  locals?: LocalsObject
) => {
  if (file.startsWith(server.config.root) && file.endsWith(".pug")) {
    const normFile = file.slice(server.config.root.length).replace(/^\//, "")

    const watchedHotPugs = hotPugs.filter(({ main, dependencies }) => [main, ...dependencies].includes(normFile))
    if (watchedHotPugs.length === 0) {
      server.config.logger.info(chalk`{redBright Pug’s Not Hot:} {cyan ${normFile}}`)
      server.ws.send({
        type: "full-reload",
      })
      return
    }

    // const data: [string, string][] = hotPugs
    //   .filter(({ main, dependencies }) => [main, ...dependencies].includes(normFile))
    //   .map(hot => {
    //     console.log("HOT", hot)
    //     //TODO: compare cached
    //     return hot
    //   })
    //   .map(({ main, query }) => [compileFile(main, options)(locals), query])

    const data = watchedHotPugs.map(hot => {
      const oldAst = cache.get(hot.main)!
      const newAst = toAst(hot.main)
      const { oldTree, newTree } = new PugAstDiff(oldAst, newAst).diff()
      console.dir({ oldAst, newAst }, { depth: 10 })

      const ins: any[] = []
      const del: { name: string; attrs: [string, string][]; indices: number[] }[] = []
      const upd: any[] = []
      const mov: any[] = []

      for (const node of diffWalker(oldTree, [EditOption.DEL])) {
        del.push({
          name: node.data!.name,
          attrs: node.data!.attrs.map(({ name, val }) => [name, dequoter(val)]),
          indices: treeIndices(node),
        })
      }

      console.log(newTree)
      for (const node of diffWalker(newTree, [EditOption.INS, EditOption.UPD, EditOption.MOV])) {
        switch (node.Op) {
          case EditOption.INS:
            ins.push({
              name: node.data!.name,
              attrs: node.data!.attrs.map(({ name, val }) => [name, dequoter(val)]),
              indices: treeIndices(node),
            })
            break
          case EditOption.UPD:
            upd.push({
              name: node.data!.name,
              attrs: node.data!.attrs.map(({ name, val }) => [name, dequoter(val)]),
              indices: treeIndices(node),
            })
            break
          case EditOption.MOV:
            mov.push({
              name: node.data!.name,
              attrs: node.data!.attrs.map(({ name, val }) => [name, dequoter(val)]),
              indices: treeIndices(node),
            })
            break
        }
      }

      return { del, ins, upd, mov, query: hot.query }
    })

    server.config.logger.info(chalk`{greenBright Hot Pug:} {cyan ${normFile}}`)
    server.ws.send({
      type: "custom",
      event: "pug-update",
      data,
    })
    return []
  }
}
