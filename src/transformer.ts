import { compileFile } from "pug"

export const compilePugFile = (_: string, pugFile: string) => {
  const compiler = compileFile(pugFile)
  return compiler()
}

export const composeTemplate = (html: string, replacer: (_: string, pugFile: string) => string) => {
  return html.replace(/<pug.+?file="(.+?)".*?\/.*?>/gi, replacer)
}
