import { XTree, EditOption } from "@dovyih/x-tree-diff-plus"
import { diffWalker, PugAstDiff, toAst } from "../src/diff"

const ast1: Pug.Block = toAst("./scripts/af1.pug")
const ast2: Pug.Block = toAst("./scripts/af2.pug")

// console.dir(ast1, { depth: 10 })
// process.exit(0)

const { oldTree, newTree } = new PugAstDiff(ast1, ast2).diff()

// console.dir({ oldTree, newTree }, { depth: 10 })

const treeIndices = (node: XTree<Pug.Node>) => {
  const indices: number[] = []
  const rfx = (node: XTree<Pug.Node>) => {
    indices.push(node.index)
    if (node.pPtr) {
      rfx(node.pPtr)
    }
  }
  rfx(node)
  return indices.reverse()
}

// export function* diffWalker(node: XTree<Pug.Node>, filter: EditOption[]): Generator<XTree<Pug.Node>> {
//   // console.log(node)
//   // yield node
//   if (filter.includes(node.Op!)) {
//     yield node
//   }
//   // @ts-ignore
//   for (const child of node.children) {
//     yield* diffWalker(child, filter)
//   }
// }

// console.log

// console.log(chalk.bold.dim("OLD"))
// console.log(Array.from(diffWalker(oldTree, [EditOption.DEL])))
console.dir(Array.from(diffWalker(newTree, [EditOption.INS, EditOption.UPD, EditOption.MOV])), { depth: 10 })
// diffWalker(newTree, [EditOption.UPD])
// console.log(chalk.bold.dim("NEW"))
// diffWalkerX(newTree)

// const del: any = []
// for (const node of diffWalker(oldTree, [EditOption.DEL])) {
//   if (node.Op === EditOption.DEL) {
//     // console.dir(node, { depth: 10 })
//     // const [tag, attrs] = node.label.split("|")
//     del.push({
//       name: node.data?.name,
//       attrs: node.data?.attrs.map(({ name, val }) => [name, val.replaceAll(/^['"]|['"]$/g, "")]),
//       indices: treeIndices(node),
//       // tag,
//       // attrs: attrs ? attrs.split(",").map(attr => attr.split("=")) : undefined,
//     })
//   }
// }

// console.dir(del, { depth: 10 })
