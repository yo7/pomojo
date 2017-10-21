import path from 'path'
import {remote} from 'electron'
import Datastore from 'nedb'
import isDev from 'electron-is-dev'

const pomodoroDB =
  isDev ?
    path.join(__dirname, '../../db/pomodoro.db') :
    path.join(remote.app.getPath('userData'), 'pomodoro.db')

const preferencesDB =
  isDev ?
    path.join(__dirname, '../../db/preferences.db') :
    path.join(remote.app.getPath('userData'), 'preferences.db')

const db = {
  pomodoro: new Datastore({
    filename: pomodoroDB,
    autoload: true,
    timestampData: true
  }),
  preferences: new Datastore({
    filename: preferencesDB,
    autoload: true
  })
}

export default db
