import { XTreeDiffPlus, XTree, NodeType } from "@dovyih/x-tree-diff-plus";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import parse from "pug-parser";
import lex from "pug-lexer";
export const toAst = (filename) => {
    const path = join(process.cwd(), filename);
    const src = readFileSync(path).toString();
    const tokens = lex(src, { filename: path });
    return parse(tokens, { filename: path, src });
};
const serializeNode = (node) => [
    node.name,
    node.attrs.map(({ name, val }) => `${name}=${val.replaceAll(/^['"]|['"]$/g, "")}`).join(","),
].join("|");
const nodeId = (node, depth, index) => node.attrs.find(attr => attr.name === "id")?.val || `${depth}-${index}-${node.name}`;
const astWalker = (nodes, depth = 0) => {
    const children = [];
    for (const [index, node] of nodes.filter(node => node.type === "Tag").entries()) {
        const tree = new XTree({
            type: NodeType.ELEMENT,
            id: nodeId(node, depth, index),
            label: serializeNode(node),
            data: node,
            index,
        });
        tree.append(astWalker(node.block.nodes, depth + 1));
        children.push(tree);
    }
    return children;
};
export class PugAstDiff extends XTreeDiffPlus {
    buildXTree(ast) {
        return astWalker(ast.nodes)[0];
    }
    dumpXTree(oldTree, newTree) {
        return { oldTree, newTree };
    }
}
