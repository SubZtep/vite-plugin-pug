import { defineConfig } from "vite"
import ViteFonts from "vite-plugin-fonts"
import pugPlugin from "../../src/index"

export default defineConfig({
  plugins: [
    ViteFonts({
      google: {
        families: [
          {
            name: "Spectral",
            styles: "wght@600",
          },
          "Karla",
        ],
      },
    }),
    pugPlugin({
      multiRoot: "./src/pages",
    }),
  ],
})
