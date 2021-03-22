/**
 * This script for Windows where npm link is not working.
 */
import { watch } from "fs/promises"
import { fileURLToPath } from "url"
import { join, dirname } from "path"
import { exec } from "child_process"
import { copy } from "fs-extra"
import chalk from "chalk"
import pkg from "../package.json"

const currDir = dirname(fileURLToPath(import.meta.url))
const distDir = join(currDir, "../dist")
const toDir = join(currDir, `../../aframe-playground/src/${pkg.name}`)
let lock = false

const build = () => {
  console.info("Building")
  exec("npm run build", async () => {
    console.log("Copying")
    try {
      await copy(distDir, toDir, { overwrite: true })
    } catch (err) {
      console.log(chalk.bgRedBright.black(err.message))
    }
    lock = false
    console.log(chalk.green("Watching"))
  })
}

const watcher = watch("src")
for await (const { eventType } of watcher) {
  if (lock || eventType !== "change") continue
  console.log("Watched")
  lock = true
  setTimeout(build, 100)
}
