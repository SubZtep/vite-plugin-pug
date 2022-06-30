"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  default: () => plugin_default,
  pugs: () => resolvePugTag
});
module.exports = __toCommonJS(src_exports);

// src/lib.ts
function isPug(filename) {
  return filename.split("?")[0].split("#")[0].endsWith(".pug");
}

// src/plugin.ts
var import_pug = require("pug");
function PugPlugin(options, locals) {
  return {
    name: "vite-plugin-pug",
    handleHotUpdate({ file, server }) {
      if (isPug(file)) {
        server.config.logger.info(`pug\u2019s not hot \u{1F32D} ${file}`);
        server.ws.send({ type: "full-reload" });
      }
    },
    transformIndexHtml: {
      transform(html, { server, filename: htmlfile }) {
        return resolvePugTag(html, (filename) => {
          const compile = (filepath) => (0, import_pug.compileFile)(filepath, options)(locals);
          if (typeof options?.localImports === "function" && options.localImports(htmlfile) || options?.localImports) {
            const filedir = htmlfile.replace(/(.*)[\\\/].*\.html$/, "$1");
            const filepath = `${filedir}/${filename}`;
            return compile(filepath);
          }
          return compile(filename);
        }, server?.config.logger);
      }
    }
  };
}
var plugin_default = PugPlugin;
function resolvePugTag(html, pugger, logger) {
  return html.replace(/<pug.+?(file|src)="(.+?)".*?\/.*?>/gi, (_tag, attr, filename) => {
    return pugger(filename);
  });
}
