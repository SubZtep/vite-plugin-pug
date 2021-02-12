import type { Plugin } from "vite"
import type { Options } from "pug"
import { composeTemplate, compilePugFile } from "./transformer"

export default (options?: Options): Plugin => ({
  name: "vite-plugin-pug",

  handleHotUpdate({ file, server }) {
    if (file.endsWith(".pug")) {
      server.ws.send({
        type: "full-reload",
      })
    }
  },

  transformIndexHtml: {
    enforce: "pre",
    transform(html) {
      return composeTemplate(html, compilePugFile(options))
    },
  },
})
