import {ipcRenderer} from 'electron'

export default {
  initialize() {
    return this.update('')
  },
  update(text) {
    return ipcRenderer.send('update-timer', text)
  }
}
