import { BrowserWindow } from 'electron'

export default class MainWindow {
  constructor () {
    const document = `file://${__dirname}/../../index.html`

    this.window = new BrowserWindow({width: 800, height: 600})
    this.window.loadURL(document)
    this.window.on('closed', () => {
      this.window = null
    })
  }

  static create () {
    console.log(__dirname)
    return new this()
  }
}
