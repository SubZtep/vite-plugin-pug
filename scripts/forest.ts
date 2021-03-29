import { XTreeDiffPlus, XTree, NodeType, EditOption } from "@dovyih/x-tree-diff-plus"
import { readFileSync } from "fs"
import parse from "pug-parser"
import lex from "pug-lexer"
import chalk from "chalk"

const filename1 = "./scripts/af1.pug"
const filename2 = "./scripts/af2.pug"
const src1 = readFileSync(filename1).toString()
const src2 = readFileSync(filename2).toString()
const tokens1 = lex(src1, { filename: filename1 })
const tokens2 = lex(src2, { filename: filename2 })
const ast1: Pug.Block = parse(tokens1, { filename: filename1, src: src1 })
const ast2: Pug.Block = parse(tokens2, { filename: filename2, src: src2 })

class PugAstDiff extends XTreeDiffPlus<Pug.Block, Pug.Node> {
  public buildXTree(ast: Pug.Block) {
    return astWalker(ast.nodes)![0]
  }

  public dumpXTree(oldTree: XTree<Pug.Node>, newTree: XTree<Pug.Node>) {
    return { oldTree, newTree }
  }
}

const serializeNode = (node: Pug.Node) => {
  const attrs = new Map<string, string>()

  node.attrs.forEach(({ name, val }) => {
    let newVal = val.replaceAll(/^['"]|['"]$/g, "")
    if (["id", "class"].includes(name) && attrs.has(name)) {
      newVal = [newVal, attrs.get(name)].sort().join(" ")
    }
    attrs.set(name, newVal)
  })

  return [
    node.name,
    Array.from(attrs.keys())
      .sort()
      .map(name => `${name}=${attrs.get(name)}`)
      .join(","),
  ].join("|")
}

const nodeId = (node: Pug.Node, depth?: number, index?: number) =>
  node.attrs.find(attr => attr.name === "id")?.val || `${depth}-${index}-${node.name}`

const astWalker = (nodes: Pug.Node[], depth = 0): XTree<Pug.Node>[] => {
  const children: XTree[] = []
  for (const [index, node] of nodes.filter(node => node.type === "Tag").entries()) {
    const tree = new XTree<Pug.Node>({
      type: NodeType.ELEMENT,
      // TODO: check id's real behaviour
      // id: nodeId(node, depth, index),
      label: serializeNode(node),
      data: node,
      index,
    })
    tree.append(astWalker(node.block.nodes, depth + 1))
    children.push(tree)
  }
  return children
}

// console.dir(ast1, { depth: 10 })
// process.exit(0)

const { oldTree, newTree } = new PugAstDiff(ast1, ast2).diff()

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

// function* parentIndicesg(node: XTree<Pug.Node>) {
//   function* rfx(node: XTree<Pug.Node>) {
//     if (node.pPtr) {
//       yield node.pPtr.index
//       yield* rfx(node.pPtr)
//     }
//   }
//   yield* rfx(node)
// }

const diffWalkerX = (node: XTree<Pug.Node>) => {
  // console.log(node)
  // console.dir(node, { depth: 10 })
  switch (node.Op) {
    case EditOption.INS:
      console.log("Insert", [node.label, node.index, node.nPtr])
      break
    case EditOption.DEL:
      console.log("Delete", [node.label, node.index])
      break
    case EditOption.UPD:
      // for (const x of parentIndicesg(node)) {
      //   console.log("X", x)
      // }
      // console.log("Y", parentIndices(node))
      // console.log("Update", [node.label, node.index])
      console.log("Update", [node.label, node.index, treeIndices(node)])
      break
    case EditOption.MOV:
      console.log("Move", [node.label, node.index, node.nPtr?.index])
      // return node.label
      // console.log("\n\n------------------------------\n\n")
      // console.dir(node, { depth: 10 })
      break
    case EditOption.NOP:
    // console.log("Nothing happened", [node.label, node.index, !!node.pPtr])
    //   break
  }
  // console.log(node.label, node.hasChildren())
  node.forEach(diffWalkerX)
}

function* diffWalker(node: XTree<Pug.Node>, filter: EditOption[]) {
  if (filter.includes(node.Op!)) {
    yield node
  }
  // @ts-ignore
  for (const child of node.children) {
    yield* diffWalker(child, filter)
  }
}

// console.log(chalk.bold.dim("OLD"))
// diffWalkerX(oldTree)
// console.log(chalk.bold.dim("NEW"))
// diffWalkerX(newTree)

const del: any = []
for (const node of diffWalker(oldTree, [EditOption.DEL])) {
  if (node.Op === EditOption.DEL) {
    // console.dir(node, { depth: 10 })
    // const [tag, attrs] = node.label.split("|")
    del.push({
      name: node.data.name,
      attrs: node.data.attrs.map(({ name, val }) => [name, val.replaceAll(/^['"]|['"]$/g, "")]),
      indices: treeIndices(node),
      // tag,
      // attrs: attrs ? attrs.split(",").map(attr => attr.split("=")) : undefined,
    })
  }
}

console.dir(del, { depth: 10 })
