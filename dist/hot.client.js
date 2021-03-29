// src/hot.client.ts
if (import.meta.hot) {
  const upd = (container) => (data) => {
    const el = getHotElement(container, data.indices);
    data.attrs.filter(([name, value]) => el.getAttribute(name) !== value).forEach(([name, value]) => el.setAttribute(name, value));
    const currNames = data.attrs.map(([name]) => name);
    el.getAttributeNames().filter((name) => !currNames.includes(name)).filter((name) => el.getAttribute(name) === "object").forEach((name) => el.removeAttribute(name));
  };
  const getHotElement = (wrapper, indices) => {
    const index = indices.slice(0, 1)[0];
    const el = wrapper.children.item(index);
    if (indices.length > 1) {
      return getHotElement(el, indices.slice(1));
    }
    return el;
  };
  import.meta.hot.on("pug-update", ([data]) => {
    const container = document.querySelector(data.container);
    data.upd.forEach(upd(container));
  });
}
