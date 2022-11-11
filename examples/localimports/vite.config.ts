import { defineConfig } from "vite"
import pugPlugin from "../../src/index"

export default defineConfig({
  plugins: [pugPlugin({ localImports: true }, { hello: "world", baseUrl: "/" })],
  base: "./",
  build: {
    rollupOptions: {
      input: {
        main: "./index.html",
        one: "./one/index.html",
        two: "./two/index.html",
        three: "./two/three/index.html"
      }
    }
  }
})
