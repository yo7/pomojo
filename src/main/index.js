import { app } from 'electron'
import MainWindow from './main-window'

let mainWindow

app.on('ready', () => {
  // TODO: when tray implemented
  // app.dock.hide()
  const document = `file://${__dirname}/../../index.html`
  mainWindow = new MainWindow(document)
})
