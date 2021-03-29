/**
 * main: path and filename without leading `./`
 * query: Media query
 */
interface HotPug {
  main: string
  query: string
  dependencies: string[]
}

/**
 * Plugin settings
 */
interface Settings {
  // hot: boolean
}

// /**
//  * Function that replace `<pug>` tag to parsed HTML.
//  */
//  type TagReplacer = (tag: string, filename: string) => string
