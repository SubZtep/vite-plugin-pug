import { composeTemplate } from "../src/index"

describe("compose template", () => {
  test("single tag", () => {
    expect(composeTemplate(`<pug file="test.pug"/>`, (_: string, fn: string) => fn)).toBe("test.pug")
  })

  test("various tags", () => {
    const html = `<html>
      <pug>moo</pug>
      <pug file="inner.pug"/>
      <pug file="INner2.pug" />
      <pug file="inner3.pug"></pug>
      <pug file="inner4.pug">hello</pug>
      <p>a</p>
    </html>`

    const htmlExpect = `<html>
      <pug>moo</pug>
      <tt>inner.pug</tt>
      <tt>INner2.pug</tt>
      <tt>inner3.pug</tt>
      <tt>inner4.pug</tt>
      <p>a</p>
    </html>`

    const replacer = (_: string, pugFile: string) => `<tt>${pugFile}</tt>`

    expect(composeTemplate(html, replacer)).toBe(htmlExpect)
  })
})
