import db from './db'

const data = db.preferences

const preferencesData = {
  updateWorkMinutes(value) {
    return update('workMinutes', value)
  },
  updateRestMinutes(value) {
    return update('restMinutes', value)
  },
  updateGoal(value) {
    return update('goal', value)
  },
  updateNotification(value) {
    return update('notification', value)
  },
  findWorkMinutes() {
    return find('workMinutes')
  },
  findRestMinutes() {
    return find('restMinutes')
  },
  findGoal() {
    return find('goal')
  },
  findNotification() {
    return find('notification')
  }
}

const update = (type, value) =>
  new Promise((resolve, reject) => {
    data.update({type}, {type, value}, {upsert: true, returnUpdatedDocs: true}, (err, _, docs) => {
      return err ? reject(err) : resolve(docs.value)
    })
  })

const find = type =>
  new Promise((resolve, reject) => {
    data.find({type}, (err, docs) => {
      if (err) {
        reject(err)
      }
      return docs[0] ? resolve(docs[0].value) : resolve()
    })
  })

export default preferencesData
