# vite-plugin-pug

![test](https://github.com/SubZtep/vite-plugin-pug/workflows/npm%20test/badge.svg)

A plugin that makes [Vite](https://vitejs.dev/) parse `<pug src="example.pug"></pug>` in your `index.html`. The rendered template replaces this tag with the compiled markup.

> :information_source: **Vue** single file components don’t require this plugin, adding [Pug](https://www.npmjs.com/package/pug) to the dependency list is enough. — aka `npm i -D pug`

## Features

- [x] CommonJS and ES module builds.
- [x] Handle self-closing `pug` tags.
- [x] Works with multiple `pug` tags.
- [x] Generated _TypeScript_ declarations.
- [x] Reload when saving changes on a `.pug` file.
- [x] Support Pug local variables.
- [x] Templates for multiple inputs.
- [ ] _Experimental hot module reloading functionality._
- [ ] _Handle adding or removing files._

## Add to a project

### Installation

Choose your appropriate choice:

```sh
$ npm i -D vite-plugin-pug
$ pnpm add -D vite-plugin-pug
$ yarn add -D vite-plugin-pug
```

### Configuration

Create a `vite.config.js` [configuration file](https://vitejs.dev/config/) and import the plugin:

```js
// vite.config.(js|ts)
import { defineConfig } from "vite"
import pugPlugin from "vite-plugin-pug"

const options = { pretty: true } // FIXME: pug pretty is deprecated!
const locals = { name: "My Pug" }

export default defineConfig({
  plugins: [pugPlugin(options, locals)],
})
```

### Plugin Parameters

| Name    | Required | Description                               |
| ------- | -------- | ----------------------------------------- |
| options | optional | [Plugin options](#plugin-options) object. |
| locals  | optional | Data object with Pug locals.              |

### Plugin Options

| Name         | Required | Description                                                                       |
| ------------ | -------- | --------------------------------------------------------------------------------- |
| ...          | optional | Anything from [Pug options](https://pugjs.org/api/reference.html#options) object. |
| localImports | optional | If `true`, use relative imports in the pug src attribute.                         |

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

> :bulb: Check out **its starter** implementation [in this repository](https://github.com/SubZtep/css-tetris-3d).

## Examples

Please find the [examples](examples/) folder in this repository.

## Contribution

~~After Rollup~~ I started to use _**Vite**_ recently but this is not a reason to leave my beloved template format behind. Its [lack of active](https://github.com/marlonmarcello/vite-plugin-pug) Pug plugins made me make one quickly. It does the job to me, I will extend it when I need it. :suspect:

If it doesn't match with your setup please [start a new discussion](https://github.com/SubZtep/vite-plugin-pug/discussions/new) about it, I'm interested to see other workflows. If something is simply not working, please [raise an issue](https://github.com/SubZtep/vite-plugin-pug/issues/new). **PRs certainly welcome!** (.❛ ᴗ ❛.)
