// import { composeTemplate } from "../src/transformer"
// import * as transformer from "../src/transformer"

describe.skip("compose template", () => {
  test("single tag", () => {
    // expect(composeTemplate(`<pug file="test.pug"/>`)).toBe("test.pug")
    console.log(jest.createMockFromModule("../src/transformer"))
    expect(true).toBeTruthy()
  })

  // test("various tags", () => {
  //   const html = `<html>
  //     <pug>moo</pug>
  //     <pug file="inner.pug"/>
  //     <pug file="INner2.pug" />
  //     <pug file="inner3.pug"></pug>
  //     <pug file="inner4.pug">hello</pug>
  //     <p>a</p>
  //   </html>`

  //   const htmlExpect = `<html>
  //     <pug>moo</pug>
  //     <tt>inner.pug</tt>
  //     <tt>INner2.pug</tt>
  //     <tt>inner3.pug</tt>
  //     <tt>inner4.pug</tt>
  //     <p>a</p>
  //   </html>`

  //   const replacer = (_: string, pugFile: string) => `<tt>${pugFile}</tt>`

  //   expect(composeTemplate(html, replacer)).toBe(htmlExpect)
  // })
})
