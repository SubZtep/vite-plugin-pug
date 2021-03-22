if (import.meta.hot) {
    const bannedTags = ["canvas", "div"];
    const bannedAttributes = ["aframe-injected"];
    let domNode;
    let domWalker;
    let pugNode;
    let pugWalker;
    let pugDocument;
    const parser = new DOMParser();
    const acceptNode = node => NodeFilter.FILTER_ACCEPT &&
        !bannedTags.includes(node.nodeName.toLowerCase()) &&
        ![...node.attributes].some(({ name }) => bannedAttributes.includes(name));
    const walkerParams = [NodeFilter.SHOW_ELEMENT, { acceptNode }, false];
    const attributesInUse = node => Object.fromEntries([...node.attributes].filter(({ value }) => value).map(({ name, value }) => [name, value]));
    const updateNode = (referenceNode, mutatableNode) => {
        const refAttrs = attributesInUse(referenceNode);
        const mutAttrs = attributesInUse(mutatableNode);
        const refKeys = Object.keys(refAttrs);
        const mutKeys = Object.keys(mutAttrs);
        const intersection = refKeys.filter(key => mutKeys.includes(key));
        const add = refKeys.filter(key => !mutKeys.includes(key));
        const del = mutKeys.filter(key => !refKeys.includes(key));
        del.forEach(key => mutatableNode.removeAttribute(key));
        add.forEach(key => mutatableNode.setAttribute(key, refAttrs[key]));
        intersection.forEach(key => {
            if (mutAttrs[key] !== refAttrs[key]) {
                mutatableNode.setAttribute(key, refAttrs[key]);
            }
        });
    };
    const updater = ([html, query]) => {
        pugDocument = parser.parseFromString(html, "text/html");
        domWalker = document.createTreeWalker(document.querySelector(query), ...walkerParams);
        pugWalker = pugDocument.createTreeWalker(pugDocument.body, ...walkerParams);
        domNode = domWalker.nextNode();
        pugNode = pugWalker.nextNode();
        while (domNode && pugNode) {
            updateNode(pugNode, domNode);
            domNode = domWalker.nextNode();
            pugNode = pugWalker.nextNode();
        }
    };
    import.meta.hot.on("pug-update", data => data.forEach(updater));
}
export {};
