import { Application } from 'pixi.js'


const app = new Application({
  resizeTo: window,
  antialias: true,
})

window.document.body.appendChild(app.view as any)