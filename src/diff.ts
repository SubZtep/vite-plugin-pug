import { XTreeDiffPlus, XTree, NodeType } from "@dovyih/x-tree-diff-plus"
import { readFileSync } from "fs"
import { join } from "path"
import parse from "pug-parser"
import lex from "pug-lexer"

export const toAst = (filename: string): Pug.Block => {
  const path = join(process.cwd(), filename)
  const src = readFileSync(path).toString()
  const tokens = lex(src, { filename: path })
  return parse(tokens, { filename: path, src })
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

export class PugAstDiff extends XTreeDiffPlus<Pug.Block, Pug.Node> {
  public buildXTree(ast: Pug.Block) {
    return astWalker(ast.nodes)![0]
  }

  public dumpXTree(oldTree: XTree<Pug.Node>, newTree: XTree<Pug.Node>) {
    return { oldTree, newTree }
  }
}
