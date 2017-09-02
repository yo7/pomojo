import { BrowserWindow } from 'electron'

export default class MainWindow {
  constructor () {
    const document = `file://${__dirname}/../renderer/index.html`
    this.window = new BrowserWindow({width: 800, height: 600})
    this.window.loadURL(document)
    this.window.on('closed', () => {
      this.window = null
    })
  }

  static create () {
    return new this()
  }
}
