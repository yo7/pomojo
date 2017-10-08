import path from 'path'
import {remote} from 'electron'
import Datastore from 'nedb'

const db = {
  pomodoro: new Datastore({
    filename: path.join(remote.app.getPath('userData'), '/pomodoro.db'),
    autoload: true,
    timestampData: true
  })
}

export default db
