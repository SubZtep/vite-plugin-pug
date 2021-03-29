interface HotPug {
  /** Root pug path (without leading `./`). */
  main: string

  /** Media query for the wrapper element. */
  container: string

  /** List of included pug paths. */
  dependencies: string[]
}

interface HotData {
  /** Tag name. */
  name: string

  /** New attribute name and value pairs. */
  attrs: [string, string][]

  /** Child indices from container to element. */
  indices: number[]
}
