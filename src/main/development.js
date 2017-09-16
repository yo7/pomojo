const dev = {
  openTool(window) {
    window.webContents.openDevTools({detach: true})
  }
}

export default dev
