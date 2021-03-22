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

const serializeNode = (node: Pug.Node) =>
  [
    node.name,
    // FIXME: merge duplicated attributes, eg: .c1(class="c2")
    node.attrs.map(({ name, val }) => `${name}=${val.replaceAll(/^['"]|['"]$/g, "")}`).join(","),
  ].join("|")

const nodeId = (node: Pug.Node, depth?: number, index?: number) =>
  node.attrs.find(attr => attr.name === "id")?.val || `${depth}-${index}-${node.name}`

const astWalker = (nodes: Pug.Node[], depth = 0): XTree<Pug.Node>[] => {
  const children: XTree[] = []
  for (const [index, node] of nodes.filter(node => node.type === "Tag").entries()) {
    const tree = new XTree<Pug.Node>({
      type: NodeType.ELEMENT,
      // TODO: check id's real behaviour
      id: nodeId(node, depth, index),
      label: serializeNode(node),
      data: node,
      index,
    })
    tree.append(astWalker(node.block.nodes, depth + 1))
    children.push(tree)
  }
  return children
}

const { oldTree, newTree } = new PugAstDiff(ast1, ast2).diff()

const diffWalker = (node: XTree<Pug.Node>) => {
  switch (node.Op) {
    case EditOption.INS:
      console.log("Insert", [node.label, node.index])
      break
    case EditOption.DEL:
      console.log("Delete", [node.label, node.index])
      break
    case EditOption.UPD:
      console.log("Update", [node.label, node.index])
      break
    case EditOption.MOV:
      console.log("Move", [node.label, node.index])
      break
  }
  node.forEach(diffWalker)
}

console.log(chalk.bold.dim("OLD"))
diffWalker(oldTree)
console.log(chalk.bold.dim("NEW"))
diffWalker(newTree)
