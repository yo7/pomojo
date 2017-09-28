import installExtension, {VUEJS_DEVTOOLS} from 'electron-devtools-installer'

const dev = {
  openTool(window) {
    installExtension(VUEJS_DEVTOOLS)
      .then(name => console.log(`Added Extension:  ${name}`))
      .catch(err => console.log('An error occurred: ', err))

    window.webContents.openDevTools({detach: true})
  }
}

export default dev
