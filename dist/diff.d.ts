import { XTreeDiffPlus, XTree } from "@dovyih/x-tree-diff-plus";
export declare const toAst: (filename: string) => Pug.Block;
export declare class PugAstDiff extends XTreeDiffPlus<Pug.Block, Pug.Node> {
    buildXTree(ast: Pug.Block): XTree<Pug.Node>;
    dumpXTree(oldTree: XTree<Pug.Node>, newTree: XTree<Pug.Node>): {
        oldTree: XTree<Pug.Node>;
        newTree: XTree<Pug.Node>;
    };
}
