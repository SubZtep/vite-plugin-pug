import type { Plugin } from "vite";
import type { Options, LocalsObject } from "pug";
export declare const composeTemplate: (html: string, replacer: (tag: string, filename: string) => string) => string;
declare const _default: (options?: Options | undefined, locals?: LocalsObject | undefined) => Plugin;
export default _default;
