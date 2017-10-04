import {ipcRenderer} from 'electron'

const app = {
  close() {
    ipcRenderer.send('close')
  }
}

export default app
