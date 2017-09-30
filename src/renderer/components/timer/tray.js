import {ipcRenderer} from 'electron'

export const initialize = () => update('')
export const update = text => ipcRenderer.send('update-timer', text)
