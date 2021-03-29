# vite-plugin-pug

![test](https://github.com/SubZtep/vite-plugin-pug/workflows/npm%20test/badge.svg)

A plugin that makes [Vite](https://vitejs.dev/) parse `<pug file="example.pug"></pug>` in your `index.html`. The rendered template replaces this tag with the compiled markup.

> :information_source: **Vue** single file components don't require this plugin, adding [Pug](https://www.npmjs.com/package/pug) to the dependency list is enough. — aka `npm i -D pug`

## Features (exists and awaiting)

- [x] Native ES module, _vite_ doesn't need to convert.
- [x] Handle self-closing `pug` tags.
- [x] Works with multiple `pug` tags.
- [x] Generated _TypeScript_ declarations.
- [x] Reload when saving changes on a `.pug` file.
- [x] Experimental **hot module reloading** functionality.
- [ ] Handle adding or removing files.

## Installation

Using npm:

```console
npm install vite-plugin-pug --save-dev
```

## Configuration

Create a `vite.config.js` [configuration file](https://vitejs.dev/config/) and import the plugin.

```js
import { defineConfig } from "vite"
import pugPlugin from "vite-plugin-pug"

const options = { pretty: true }
const locals = { name: "My Pug" }

export default defineConfig({
  plugins: [pugPlugin(options, locals)],
})
```

### Plugin Parameters

| Key     | Required | Description                                                        |
| ------- | -------- | ------------------------------------------------------------------ |
| options | optional | [Pug options](https://pugjs.org/api/reference.html#options) object |
| locals  | optional | Pug locals                                                         |

## Usage

### Simple

Create a template file.

```pug
//- index.pug
h1 Hello World
p I'm a cool Vite project!
```

Embed `pug` tag with `src` attribute somewhere.

```html
<!-- index.html -->
<html>
  <body>
    <pug src="index.pug" />
    <script type="module" src="/main.ts"></script>
  </body>
</html>
```

That's it.

> :bulb: Check out **an example** implementation [in this repository](https://github.com/SubZtep/css-tetris-3d).

### Hot Reload

Adding `update` attibute to a `pug` tag start hot reloading, the value is a media query string for the wrapper element.

```html
<!-- index.html -->
<html>
  <head>
    <script type="text/html">
      <pug file="./src/main.pug" update="#main" />
    </script>
  </head>
  <body>
    <div id="main"></div>
    <script src="imports.ts"></script>
  </body>
</html>
```

> A-Frame example above, tbc.

## Contribution

~~After Rollup~~ I started to use _**Vite**_ recently but this is not a reason to leave my beloved template format behind. Its [lack of active](https://github.com/marlonmarcello/vite-plugin-pug) Pug plugins made me make one quickly. It does the job to me, I will extend it when I need it. :suspect:

If it doesn't match with your setup please [start a new discussion](https://github.com/SubZtep/vite-plugin-pug/discussions/new) about it, I'm interested to see other workflows. If something is simply not working, please [raise an issue](https://github.com/SubZtep/vite-plugin-pug/issues/new). **PRs certainly welcome!** (.❛ ᴗ ❛.)

## License

[The Unlicense](LICENSE)

### Third Party

| Name                                                                   | License                                                                   | Description                         |
| ---------------------------------------------------------------------- | ------------------------------------------------------------------------- | ----------------------------------- |
| [@dovyih/x-tree-diff-plus](https://github.com/yidafu/x-tree-diff-plus) | [MPL-2.0](https://github.com/yidafu/x-tree-diff-plus/blob/master/LICENSE) | Difference ASTs.                    |
| [pug](https://github.com/pugjs/pug)                                    | [MIT](https://github.com/pugjs/pug#license)                               | Pug to AST, Pug to HTML.            |
| [uuid](https://github.com/uuidjs/uuid)                                 | [MIT](https://github.com/uuidjs/uuid/blob/master/LICENSE.md)              | Generate identifier for hot update. |
