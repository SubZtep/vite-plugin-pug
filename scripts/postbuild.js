const { join } = require("path")
const { readFileSync, writeFileSync } = require("fs")

const distFile = join(__dirname, "../dist/index.js")
const hotFile = join(__dirname, "../src/hot.js")

const dist = readFileSync(distFile).toString()
const hot = readFileSync(hotFile).toString()
writeFileSync(distFile, dist.replace("hot.js", hot))
