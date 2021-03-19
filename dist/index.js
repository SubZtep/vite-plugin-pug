"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.composeTemplate = void 0;
const fs_1 = require("fs");
const vite_1 = require("vite");
const pug_1 = require("pug");
const hmrs = {};
const compilePugFile = (options, locals) => (tag, filename) => {
    const um = tag.match(/update=['"]{1}(.+?)['"]{1}/i);
    if (um !== null) {
        hmrs[filename.replace(/^\/|\.\//, "")] = {
            query: um[1],
            dependencies: [
                ...new Set(pug_1.compileClientWithDependenciesTracked(fs_1.readFileSync(filename).toString(), {
                    ...options,
                    filename,
                }).dependencies.map(fn => vite_1.normalizePath(fn))),
            ],
        };
    }
    return pug_1.compileFile(filename, options)(locals);
};
const composeTemplate = (html, replacer) => {
    return html.replace(/<pug.+?file="(.+?)".*?\/.*?>/gi, replacer);
};
exports.composeTemplate = composeTemplate;
const rootPugsQueries = (filename) => Object.entries(hmrs).reduce((acc, [key, val]) => {
    if (key === filename || val.dependencies.includes(filename)) {
        acc.push([key, val.query]);
    }
    return acc;
}, []);
exports.default = (options, locals) => {
    const virtualFileId = "@pug-updater";
    return {
        name: "vite-plugin-pug",
        load(id) {
            if (id.endsWith(virtualFileId)) {
                return `if (import.meta.hot) {
  const bannedTags = ["canvas", "div"]
  const bannedAttributes = ["aframe-injected"]

  let domNode
  let domWalker
  let pugNode
  let pugWalker
  let pugDocument
  const parser = new DOMParser()

  const acceptNode = node =>
    NodeFilter.FILTER_ACCEPT &&
    !bannedTags.includes(node.nodeName.toLowerCase()) &&
    ![...node.attributes].some(({ name }) => bannedAttributes.includes(name))

  const walkerParams = [NodeFilter.SHOW_ELEMENT, { acceptNode }, false]

  const attributesInUse = node =>
    Object.fromEntries([...node.attributes].filter(({ value }) => value).map(({ name, value }) => [name, value]))

  const updateNode = (referenceNode, mutatableNode) => {
    const refAttrs = attributesInUse(referenceNode)
    const mutAttrs = attributesInUse(mutatableNode)
    const refKeys = Object.keys(refAttrs)
    const mutKeys = Object.keys(mutAttrs)

    const intersection = refKeys.filter(key => mutKeys.includes(key))
    const add = refKeys.filter(key => !mutKeys.includes(key))
    const del = mutKeys.filter(key => !refKeys.includes(key))

    del.forEach(key => mutatableNode.removeAttribute(key))
    add.forEach(key => mutatableNode.setAttribute(key, refAttrs[key]))
    intersection.forEach(key => {
      if (mutAttrs[key] !== refAttrs[key]) {
        mutatableNode.setAttribute(key, refAttrs[key])
      }
    })
  }

  const updater = ([html, query]) => {
    pugDocument = parser.parseFromString(html, "text/html")

    domWalker = document.createTreeWalker(document.querySelector(query), ...walkerParams)
    pugWalker = pugDocument.createTreeWalker(pugDocument.body, ...walkerParams)

    domNode = domWalker.nextNode()
    pugNode = pugWalker.nextNode()

    while (domNode && pugNode) {
      updateNode(pugNode, domNode)

      domNode = domWalker.nextNode()
      pugNode = pugWalker.nextNode()
    }
  }

  import.meta.hot.on("pug-update", data => data.forEach(updater))
}
`;
            }
        },
        handleHotUpdate({ file, server }) {
            if (file.startsWith(server.config.root) && file.endsWith(".pug")) {
                const hotFile = file.slice(server.config.root.length).replace(/^\//, "");
                const data = rootPugsQueries(hotFile).map(([filename, mediaQuery]) => [
                    pug_1.compileFile(filename, options)(locals),
                    mediaQuery,
                ]);
                if (data.length === 0) {
                    server.config.logger.info(`Pug’s Not Hot: ${hotFile}`);
                    server.ws.send({
                        type: "full-reload",
                    });
                    return;
                }
                server.config.logger.info(`Hot Pug: ${hotFile}`);
                server.ws.send({
                    type: "custom",
                    event: "pug-update",
                    data,
                });
                return [];
            }
        },
        transformIndexHtml: {
            transform(html) {
                const pugless = exports.composeTemplate(html, compilePugFile(options, locals));
                const script = `<script type="module" src="${virtualFileId}"></script>`;
                const pos = pugless.indexOf("</head>");
                if (pos === -1) {
                    return pugless + script;
                }
                return [pugless.slice(0, pos), script, pugless.slice(pos)].join("");
            },
        },
    };
};
