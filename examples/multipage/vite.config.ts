import { defineConfig } from "vite"
import pugPlugin from "../../src/index"

export default defineConfig({
  plugins: [pugPlugin(undefined, { hello: "world", baseUrl: "/nested/" })],
  base: "./",
  build: {
    rollupOptions: {
      input: {
        main: "./index.html",
        nested: "./nested/index.html"
      }
    }
  }
})
