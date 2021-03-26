/**
 * Save old Pug to be able to compare with changed version.
 */
import { toAst } from "./diff.js"

const cache: Map<string, Pug.Block> = new Map()

export const cacheVersion = ({ main }: HotPug): void => {
  cache.set(main, toAst(main))
}
