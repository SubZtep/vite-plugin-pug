import { readFileSync } from "fs"
import { join } from "path"
import * as lex from "pug-lexer"
import * as parse from "pug-parser"
import { XTreeDiffPlus, XTree, NodeType, EditOption } from "@dovyih/x-tree-diff-plus"

const filename1 = join(__dirname, "af1.pug")
const filename2 = join(__dirname, "af2.pug")
const src1 = readFileSync(filename1).toString()
const src2 = readFileSync(filename2).toString()
const tokens1 = lex(src1, { filename: filename1 })
const tokens2 = lex(src2, { filename: filename2 })
const ast1: Pug.Block = parse(tokens1, { filename: filename1, src: src1 })
const ast2: Pug.Block = parse(tokens2, { filename: filename2, src: src2 })

// console.log(JSON.stringify(lex(src, { filename }), null, "  "))
// console.log(JSON.stringify(ast1, null, "  "))

class DefaultXTreeDiff extends XTreeDiffPlus<XTree, XTree<Pug.Node>> {
  public buildXTree(tree: XTree) {
    return tree
  }

  public dumpXTree(oldTree: XTree, newTree: XTree): { oldTree: XTree; newTree: XTree } {
    return { oldTree, newTree }
  }
}

const serializeNode = (node: Pug.Node) =>
  [
    node.name,
    // FIXME: merge duplicated attributes, eg: .c1(class="c2")
    node.attrs.map(({ name, val }) => `${name}=${val.replaceAll(/^['"]|['"]$/g, "")}`).join(","),
  ].join("|")

const astWalker = ({ nodes }: Pug.Block): XTree<Pug.Node>[] => {
  const children: XTree[] = []
  for (const [index, node] of nodes.filter(node => node.type === "Tag").entries()) {
    const tree = new XTree({
      type: NodeType.ELEMENT,
      // TODO: check id's real behaviour
      // id: node.attrs.find(attr => attr.name === "id")?.val,
      label: serializeNode(node),
      data: node,
      index,
    })
    tree.append(astWalker(node.block))
    children.push(tree)
  }
  return children
}

const tree1: XTree = astWalker(ast1)![0]
const tree2: XTree = astWalker(ast2)![0]

const { oldTree, newTree } = new DefaultXTreeDiff(tree1, tree2).diff()

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

console.log("OLD")
diffWalker(oldTree)
console.log("NEW")
diffWalker(newTree)
// console.dir(diff.newTree, { depth: 10 })
