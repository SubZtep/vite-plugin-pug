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

class DefaultXTreeDiff extends XTreeDiffPlus<XTree, string> {
  public buildXTree(tree: XTree) {
    return tree
  }

  public dumpXTree(oldTree: XTree, newTree: XTree): { oldTree: XTree; newTree: XTree } {
    return { oldTree, newTree }
  }
}

const serializeAttrs = (attrs: Pug.Attr[]) => attrs.map(({ name, val }) => `${name}=${val}`).join(", ")

const astWalker = (block: Pug.Block, level = 0): XTree[] | undefined => {
  const children: XTree[] = []
  for (const [index, node] of block.nodes.entries()) {
    if (node.type === "Tag") {
      children.push(
        new XTree({
          label: node.name,
          type: NodeType.ELEMENT,
          index: index + 1,
          children: astWalker(node.block, level + 1),
          data: serializeAttrs(node.attrs),
        })
      )
    }
  }

  return children.length > 0 ? children : undefined
}

const tree1: XTree = astWalker(ast1)![0]
const tree2: XTree = astWalker(ast2)![0]

const { oldTree, newTree } = (new DefaultXTreeDiff(tree1, tree2).diff() as unknown) as {
  oldTree: XTree
  newTree: XTree
}

const diffWalker = (node: XTree) => {
  switch (node.Op) {
    case EditOption.INS:
      console.log("Insert", [node.label, node.data, node.index])
      break
    case EditOption.DEL:
      console.log("Delete", [node.label, node.data])
      break
    case EditOption.UPD:
      console.log("UPD", node)
      break
    case EditOption.MOV:
      console.log("MOV", node)
      break
  }

  node.forEach(diffWalker)
}

diffWalker(oldTree)
diffWalker(newTree)
// console.dir(diff.newTree, { depth: 10 })
