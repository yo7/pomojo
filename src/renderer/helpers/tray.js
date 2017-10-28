import {ipcRenderer} from 'electron'

export const initializeTray = () => updateTray('')
export const updateTray = text => ipcRenderer.send('updateTray-timer', text)
