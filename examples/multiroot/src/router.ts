import Navigo from "navigo"
import "./style.css"

window.addEventListener("load", () => {
  const render = (content: string) => (document.querySelector("#app")!.innerHTML = content)

  new Navigo("/")
    .on("^(.*)", async match => {
      let path = match?.url
      if (path) path += "/"
      const res = await import(`./pages/${path}index.pug.js`)
      render(res.html)
    })
    .resolve()
})
