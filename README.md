# vite-plugin-pug

![test](https://github.com/SubZtep/vite-plugin-pug/workflows/npm%20test/badge.svg)

A plugin that makes [Vite](https://vitejs.dev/) parse `<pug file="example.pug"></pug>` in your `index.html`. The rendered template replaces this tag with the compiled markup.

- Handle self-closing tags.
- Works with multiple `pug` tags.
- Generated _TypeScript_ declarations.
- Common JS module but tested as ES module.
- Auto-reload browser when saving changes to `.pug` file.

## Installation

Using npm:

```console
npm install vite-plugin-pug --save-dev
```

## Configuration

Create a `vite.config.js` [configuration file](https://vitejs.dev/config/) and import the plugin:

```js
import { defineConfig } from "vite"
import pugPlugin from "vite-plugin-pug"

export default defineConfig({
  plugins: [
    pugPlugin()
  ]
})
```

### Plugin Options

Accept [Pug options](https://pugjs.org/api/reference.html#options) as an optional parameter.

```js
// vite.config.js
pugPlugin({
  pretty: true
})
```

## Usage

Create a template file.

```pug
//- index.pug
h1 Hello World
p I'm a cool Vite project!
```

Embed `pug` tag with `file` attribute somewhere.

```html
<!-- index.html -->
<html>
<body>
  <pug file="index.pug" />
  <script type="module" src="/main.ts"></script>
</body>
</html>
```

That's it.

## Contribution

 ~~After Rollup~~ I started to use _**Vite**_ recently but this is not a reason to leave my beloved template format behind. Its [lack of active](https://github.com/marlonmarcello/vite-plugin-pug) Pug plugins made me make one quickly. It does the job to me, I will extend it when I need it. :suspect:

 If it doesn't match with your setup please [start a new discussion](https://github.com/SubZtep/vite-plugin-pug/discussions/new) about it, I'm interested to see other workflows. If something is simply not working, please [raise an issue](https://github.com/SubZtep/vite-plugin-pug/issues/new). **PRs certainly welcome!** (.❛ ᴗ ❛.)
