import path from 'path'
import {app, BrowserWindow, Tray} from 'electron'
import isDev from 'electron-is-dev'
import dev from './development'

let window
let tray

app.on('ready', () => {
  initTray()
  initWindow()
})

function initWindow(withDock = false) {
  if (withDock === false) {
    app.dock.hide()
  }

  const config = {
    height: 450,
    width: 320,
    frame: false,
    resizable: false,
    show: false
  }
  window = new BrowserWindow(config)
  const document = `file://${__dirname}/../../index.html`
  window.loadURL(document)
  window.on('blur', () => window.hide())

  showWindow()

  if (isDev) {
    dev.openTool(window)
  }
}

function initTray() {
  const image = 'juiceTemplate.png'
  const imagePath = path.join(__dirname, `../../assets/${image}`)
  tray = new Tray(imagePath)
  tray.on('click', () => toggleWindow())
}

function toggleWindow() {
  return window.isFocused() ? window.hide() : showWindow()
}

function showWindow() {
  const position = getWindowPosition()
  window.setPosition(position.x, position.y, false)
  window.show()
  window.focus()
}

function getWindowPosition() {
  const windowBounds = window.getBounds()
  const trayBounds = tray.getBounds()

	// Center window horizontally below the tray icon
  const x = Math.round(trayBounds.x + (trayBounds.width / 2) - (windowBounds.width / 2))
	// Position window 4 pixels vertically below the tray icon
  const y = Math.round(trayBounds.y + trayBounds.height + 4)
  return {x, y}
}
