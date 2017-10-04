import {ipcRenderer} from 'electron'
import app from '../app'

describe('app', () => {
  it('triggers quit event of ipcRenderer', () => {
    app.close()
    expect(ipcRenderer.send).toHaveBeenCalledWith('close')
  })
})
