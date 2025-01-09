import { Application } from 'pixi.js'
import { GameScreen } from './game/GameScreen'
import { LoadingScreen } from './load/LoadingScreen'
import { MainMenuScreen } from './main/MainMenuScreen'
import { Screen } from './Screen'

const app = new Application({
  resizeTo: window,
  antialias: true,
})

window.document.body.appendChild(app.view as any)


let currentScreen: Screen | null = null

export function startMainMenu() {
  if (currentScreen != null) {
    currentScreen!.onClose()
    app.stage.removeChildren()
  }
  currentScreen = new MainMenuScreen(app)
}

export function startGame() {
  if (currentScreen != null) {
    currentScreen!.onClose()
    app.stage.removeChildren()
  }
  currentScreen = new GameScreen(app)
}

currentScreen = new LoadingScreen(app)

app.ticker.maxFPS = 60
app.ticker.add(() => {
  currentScreen?.onNextFrame()
})
