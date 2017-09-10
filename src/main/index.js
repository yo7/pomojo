import { app, BrowserWindow } from 'electron'

let mainWindow

app.on('ready', () => {
  const options = {width: 500, height: 600}
  const document = `file://${__dirname}/../../index.html`

  mainWindow = new BrowserWindow(options)
  mainWindow.loadURL(document)
})

app.on('window-all-closed', () => {
  const isDarwin = () => process.platform === 'darwin'

  if (!isDarwin) {
    app.quit()
  }
})
