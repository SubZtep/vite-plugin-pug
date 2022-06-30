import type { Logger, Plugin } from "vite";
import type { Options, LocalsObject } from "pug";
interface Props {
    /** Pug compiler options — https://pugjs.org/api/reference.html#options */
    options?: Options;
    /** Pug enviroment, key/value object with local variables */
    locals?: LocalsObject;
    /**
     * Search Pug files in the directory of currently compiled
     * index.html (locally) instead of project root. \
     * Can accept a function to determine the option per-html-file. \
     * **TODO: _(wat?xD)_**
     */
    localImports?: boolean | ((htmlfile: string) => boolean);
}
/**
 * Main plugin. Single object prop is the way.
 */
declare function PugPlugin({ options, locals, localImports }: Props): Plugin;
export default PugPlugin;
export declare function resolvePugTag(html: string, pugger: (filename: string) => string, logger?: Pick<Logger, "warn">): string;
