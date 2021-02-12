import { compileFile, Options } from "pug"

export const compilePugFile = (options?: Options) => (_: string, pugFile: string) => {
  const compiler = compileFile(pugFile, options)
  return compiler()
}

export const composeTemplate = (html: string, replacer: (_: string, pugFile: string) => string) => {
  return html.replace(/<pug.+?file="(.+?)".*?\/.*?>/gi, replacer)
}
