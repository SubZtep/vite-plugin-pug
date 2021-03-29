import type { EditOption } from "@dovyih/x-tree-diff-plus"
import { XTreeDiffPlus, XTree, NodeType } from "@dovyih/x-tree-diff-plus"
import { readFileSync } from "fs"
import { join } from "path"
import parse from "pug-parser"
import lex from "pug-lexer"

export const toAst = (filename: string, cwd = process.cwd()): Pug.Block => {
  const path = join(cwd, filename)
  const src = readFileSync(path).toString()
  const tokens = lex(src, { filename: path })
  return parse(tokens, { filename: path, src })
}

export const treeIndices = (node: XTree<Pug.Node>) => {
  const indices: number[] = []

  const rfx = (node: XTree<Pug.Node>) => {
    if (node.pPtr) {
      indices.push(node.pPtr.index)
      rfx(node.pPtr)
    }
  }

  rfx(node)
  return indices.reverse()
}

export function* diffWalker(node: XTree<Pug.Node>, filter: EditOption[]): Generator<XTree<Pug.Node>> {
  if (filter.includes(node.Op!)) {
    yield node
  }
  // @ts-ignore
  for (const child of node.children) {
    yield* diffWalker(child, filter)
  }
}

export const dequoter = (str: string) => str.replaceAll(/^['"]|['"]$/g, "")

const serializeNode = (node: Pug.Node) => {
  const attrs = new Map<string, string>()

  node.attrs.forEach(({ name, val }) => {
    let newVal = dequoter(val)
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

const astWalker = (nodes: Pug.Node[], depth = 0): XTree<Pug.Node>[] => {
  const children: XTree[] = []
  for (const [index, node] of nodes.filter(node => node.type === "Tag").entries()) {
    const tree = new XTree<Pug.Node>({
      type: NodeType.ELEMENT,
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
