import {ipcRenderer} from 'electron'

const updateTray = text => ipcRenderer.send('update-timer', text)

export default updateTray
