import {ipcRenderer} from 'electron'
import { initializeTray, updateTray } from '../tray'

describe('tray', () => {
  it('triggers updateTray-timer event of ipcRenerer with given text on updateTray', () => {
    updateTray('25:00')
    expect(ipcRenderer.send).toHaveBeenCalledWith('updateTray-timer', '25:00')
  })

  it('triggers updateTray-timer envent of ipcRenderer with empty text on initializeTray', () => {
    initializeTray()
    expect(ipcRenderer.send).toHaveBeenCalledWith('updateTray-timer', '')
  })
})
