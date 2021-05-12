import { resolve } from "path"
import { defineConfig } from "vite"
import pugPlugin from "../../src/index"

export default defineConfig({
  // @ts-ignore
  plugins: [pugPlugin({ localImports: true }, { hello: "world", baseUrl: "/" })],
  base: "./",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        one: resolve(__dirname, "one/index.html"),
        two: resolve(__dirname, "two/index.html"),
        three: resolve(__dirname, "two/three/index.html"),
      },
    },
  },
})
