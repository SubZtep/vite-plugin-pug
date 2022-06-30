// import { extname } from "node:path"
// import { extname } from "path"

export function isPug(filename: string) {
  return filename.split("?")[0].endsWith(".pug")
  // return extname(filename).split("?")[0].endsWith(".pug")
}
