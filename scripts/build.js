import { build } from "esbuild"

const watch = process.argv.slice(2).includes("--watch")

await build({
  entryPoints: ["src/index.ts"],
  outfile: "./dist/index.js",
  platform: "neutral",
  format: "esm",
  bundle: true,
  external: ["pug"],
  minifyWhitespace: !watch,
  // watch,
})

!watch &&
  (await build({
    entryPoints: ["src/index.ts"],
    outfile: "./dist/index.cjs",
    platform: "neutral",
    format: "cjs",
    bundle: true,
    external: ["pug"],
  }))
