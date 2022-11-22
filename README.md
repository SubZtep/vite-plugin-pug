# :first_quarter_moon: vite-plugin-pug :last_quarter_moon:

> > > > > > > > > > > > > > ```
> > > > > > > > > > > > > > ⠀⠀⠀⡠⣠⠔⠂⠉⠉⠩⡉⠒⠢⣖⠠⡀⠀⠀⠀⠀
> > > > > > > > > > > > > > ⢠⠖⢹⡎⠁⢀⠐⠁⢀⠇⢠⡦⣀⠻⣦⡀⢉⡗⠀⠀
> > > > > > > > > > > > > > ⠘⢇⣸⡤⣶⣶⣞⣷⣼⣴⣼⣿⣶⡦⠈⢫⡾⠁⠀⠀
> > > > > > > > > > > > > > ⠀⠈⢛⠀⣛⣿⣿⠿⣿⠷⠛⢟⣛⡁⠀⠇⠀⠀⠀⠀
> > > > > > > > > > > > > > ⠀⠀⠸⡄⠻⣮⣛⡿⢿⢬⣛⣭⣿⠃⢠⣇⠀⠀⠀⠀
> > > > > > > > > > > > > > ⠀⠀⡼⡌⠂⡈⠫⢣⣜⣠⡿⠗⠁⢂⠕⠹⡀⠀⠀⠀
> > > > > > > > > > > > > > ⠀⠀⡱⡘⢄⠈⠢⡀⠀⠂⢀⠀⡐⠁⠠⠃⢃⠀⠀⠀
> > > > > > > > > > > > > > ⠀⠀⡇⠑⠄⠑⢀⠈⠢⡈⠀⠀⠀⡠⠂⠀⣈⠀⠀⠀
> > > > > > > > > > > > > > ⠀⠀⣇⠀⠀⠀⢀⣀⡀⢀⠀⠀⠀⠀⠀⠀⡏⡄⠀⠀
> > > > > > > > > > > > > > ⠀⠀⡏⠀⢠⡂⠀⠀⠀⠀⠀⠀⠐⡄⠀⠀⡏⠙⡄⠀
> > > > > > > > > > > > > > ⠀⠀⡇⠀⢸⡁⠀⠀⠀⠀⠀⠀⠀⢹⠀⠀⡇⠀⠁⠀
> > > > > > > > > > > > > > ⢀⡠⠃⠀⡸⢊⢢⡀⠀⠀⠀⠀⢀⡌⠀⢠⣁⣠⡃⠀
> > > > > > > > > > > > > > ⢿⣋⣆⡰⠓⠓⠊⠀⠉⠀⠀⠉⠁⢇⠀⡘⣳⣄⡪⠆
> > > > > > > > > > > > > > ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠉⠁⠀⠀⠀
> > ```
> ```

## Usage

[Vite](https://vitejs.dev/) plugin that replaces **\<pug \/\>** tags with compiled and rendered templates in the **index.html**.

| Embed source              | ~~Embed inline~~ ₿ | Pages hierarchy  |
| ------------------------- | ------------------ | ---------------- |
| `<pug src="example.pug">` | `<pug>`            | `index.pug`      |
| `</pug>`                  | `button#id.class(onclick=";")` | `fluffy.pug` |
|                           | ` ` ` ` `Click me` | `base/index.pug` |
|                           | `</pug>`           | |

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
- [ ] _Support nested page structure._

## Add to a project

Install with your appropriate choice:

```sh
$ npm install --save-dev vite-plugin-pug

$ pnpm add --save-dev vite-plugin-pug

$ yarn add --dev vite-plugin-pug
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
| options | optional | Plugin and [Pug options](https://pugjs.org/api/reference.html#options) object merged |
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


> :information_source: **Vue** SFC (and similar frameworks) don’t require this plugin, adding [the Pug package](https://www.npmjs.com/package/pug) to the dependency list is enough. — `$ npm i -D pug`


> :bulb: Check out **its starter** implementation [in this repository](https://github.com/SubZtep/css-tetris-3d).

## Examples

Please find the [examples](examples/) folder in this repository.

## Contribution

~~After Rollup~~ I started to use _**Vite**_ recently but this is not a reason to leave my beloved template format behind. Its [lack of active](https://github.com/marlonmarcello/vite-plugin-pug) Pug plugins made me make one quickly. It does the job to me, I will extend it when I need it. :suspect:

If it doesn't match with your setup please [start a new discussion](https://github.com/SubZtep/vite-plugin-pug/discussions/new) about it, I'm interested to see other workflows. If something is simply not working, please [raise an issue](https://github.com/SubZtep/vite-plugin-pug/issues/new). **PRs certainly welcome!** (.❛ ᴗ ❛.)


![test](https://github.com/SubZtep/vite-plugin-pug/workflows/npm%20test/badge.svg)
