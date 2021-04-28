import type { Options, LocalsObject } from "pug"

declare module "@pug" {
  const locals: LocalsObject
  export {
    locals
  }
}
