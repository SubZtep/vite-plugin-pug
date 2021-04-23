import { pugs } from "../src/index"

describe("html parser", () => {
  const html = `<html>
    <pug>moo</pug>
    <pug file="inner.pug"/>
    <pug file="INner2.pug" />
    <pug file="./nested/inner3.pug"></pug>
    <pug src="nested/inner4.pug">hello</pug>
    <p>a</p>
  </html>`

  test("warning for deprecated", () => {
    const spy = jest.spyOn(console, "warn").mockImplementation()
    pugs(html, _ => "", console)
    expect(console.warn).toHaveBeenCalledTimes(3)
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
})
