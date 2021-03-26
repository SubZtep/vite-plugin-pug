import type { Options, LocalsObject } from "pug";
export declare const composeTemplate: (html: string, options?: Options | undefined, locals?: LocalsObject | undefined) => [HotPug[], string];
export declare const injectScript: (hots: HotPug[], html: string, virtualFileId: string) => string;
