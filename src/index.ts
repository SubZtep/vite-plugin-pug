import type { Plugin } from "vite"
import { composeTemplate, compilePugFile } from "./transformer"

export default (): Plugin => ({
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
      return composeTemplate(html, compilePugFile)
    },
  },
})
