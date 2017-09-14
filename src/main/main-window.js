import { BrowserWindow } from 'electron'

export default class MainWindow {
  constructor (url) {
    const options = {
      width: 500,
      height: 600,
      frame: false,
      resizable: false
      // TODO: when tray implemented
      // show: false
    }

    this.window = new BrowserWindow(options)
    this.load(url)
  }

  load (url) {
    this.window.loadURL(url)
  }
}
