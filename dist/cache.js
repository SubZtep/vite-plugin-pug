import { toAst } from "./diff.js";
const cache = new Map();
export const cacheVersion = ({ main }) => {
    cache.set(main, toAst(main));
};
