const { join } = require("path")
const { execSync } = require("child_process")
const { readFileSync, writeFileSync } = require("fs")

execSync("tsc", { cwd: join(__dirname, "..") })

const distFile = join(__dirname, "../dist/index.js")
const hotFile = join(__dirname, "../src/hot.js")

const dist = readFileSync(distFile).toString()
const hot = readFileSync(hotFile).toString()
writeFileSync(distFile, dist.replace("hot.js", hot))
