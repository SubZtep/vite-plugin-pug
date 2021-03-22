import { fileURLToPath } from "url"
import { join, dirname } from "path"
import { readFileSync, writeFileSync } from "fs"

const __dirname = dirname(fileURLToPath(import.meta.url))
const distFile = join(__dirname, "../dist/index.js")
const hotFile = join(__dirname, "../src/hot.js")

const dist = readFileSync(distFile).toString()
const hot = readFileSync(hotFile).toString()
writeFileSync(distFile, dist.replace("hot.js", hot))
