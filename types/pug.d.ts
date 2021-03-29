namespace Pug {
  interface Block {
    type: "Block"
    nodes: Node[]
    line: number
    filename: string
  }

  interface Node {
    type: "Tag" | "Text" | "Comment"
    name: string
    selfClosing: boolean
    block: Block
    attrs: Attr[]
    attributeBlocks: any[]
    isInline: boolean
    line: number
    column: number
    mustEscape: boolean
  }

  interface Attr {
    name: string
    val: string
    line: number
    column: number
    filename: number
    mustEscape: boolean
  }
}
