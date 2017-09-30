import {ipcRenderer} from 'electron'
import * as tray from '../tray'

describe('tray', () => {
  it('triggers update-timer event of ipcRenerer with given text on update', () => {
    tray.update('25:00')
    expect(ipcRenderer.send).toHaveBeenCalledWith('update-timer', '25:00')
  })

  it('triggers update-timer envent of ipcRenderer with empty text on initialize', () => {
    tray.initialize()
    expect(ipcRenderer.send).toHaveBeenCalledWith('update-timer', '')
  })
})
