import { app } from 'electron'
import MainWindow from './MainWindow'

app.on('ready', () => {
  MainWindow.create()
})
