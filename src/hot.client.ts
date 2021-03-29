if (import.meta.hot) {
  const upd = (container: HTMLElement) => (data: HotData) => {
    const el = getHotElement(container, data.indices)
    data.attrs
      .filter(([name, value]) => el.getAttribute(name) !== value)
      .forEach(([name, value]) => el.setAttribute(name, value))

    const currNames = data.attrs.map(([name]) => name)
    el.getAttributeNames()
      .filter(name => !currNames.includes(name))
      // A-Frame's habbit to add object mandatory attributes (eg: material, geometry)
      .filter(name => el.getAttribute(name) === "object")
      .forEach(name => el.removeAttribute(name))

    // TODO: check if (tag) name changed
  }

  const getHotElement = (wrapper: HTMLElement, indices: number[]): HTMLElement => {
    const index = indices.slice(0, 1)[0]
    const el = wrapper.children.item(index) as HTMLElement
    if (indices.length > 1) {
      return getHotElement(el, indices.slice(1))
    }
    return el
  }

  import.meta.hot!.on("pug-update", ([data]) => {
    // console.log("CLIENT PUG UPDATE", data)
    const container = document.querySelector(data.container) as HTMLElement

    data.upd.forEach(upd(container))
    //TODO: mov
    //TODO: ins
    //TODO: del
  })
}
