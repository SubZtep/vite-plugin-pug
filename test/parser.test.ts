import { pugs } from "../src/lib"
import { test, expect, vi } from "vitest"

const html = `<html>
  <pug>moo</pug>
  <pug src="inner.pug"/>
  <pug src="INner2.pug" />
  <pug src="./nested/inner3.pug"></pug>
  <pug src="nested/inner4.pug">hello</pug>
  <p>a</p>
</html>`

test.skip("warning for deprecated", () => {
  // const spy = vi.spyOn(console, "warn").mockImplementation()
  // const spy = vi.spyOn(console, "warn").mockImplementation(() => {})
  const spy = vi.spyOn(console, "warn")
  pugs(html, _ => "", console)
  expect(spy).toHaveBeenCalledTimes(3)
  spy.mockRestore()
})

test("find all source files", () => {
  let filenames: string[] = []
  pugs(html, filename => filenames.push(filename).toString())
  expect(filenames).toEqual(["inner.pug", "INner2.pug", "./nested/inner3.pug", "nested/inner4.pug"]
  )
})

test("replace tags", () => {
  const parsed = pugs(html, _ => "")
  expect(parsed).toContain("<html>")
  expect(parsed.split("pug")).toHaveLength(3)
})
