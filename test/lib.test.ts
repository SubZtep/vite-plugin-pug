import { test, expect, vi } from "vitest"
import * as lib from "../src/lib"

test("isPub", () => {
  expect(lib.isPug("foo.pug")).toBe(true)
  expect(lib.isPug("foo.pug?bar")).toBe(true)
  expect(lib.isPug("foo.pug#bar")).toBe(true)
  expect(lib.isPug("foo.pub")).toBe(false)
})
