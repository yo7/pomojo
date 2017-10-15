import db from './db'

const data = db.preferences

const preferencesData = {
  updateWorkMinutes(value) {
    return updateCount('workMinutes', value)
  },
  updateGoal(value) {
    return updateCount('goal', value)
  },
  findWorkMinutes() {
    return findCount('workMinutes')
  },
  findGoal() {
    return findCount('goal')
  }
}

const updateCount = (type, value) =>
  new Promise((resolve, reject) => {
    data.update({type}, {type, value}, {upsert: true, returnUpdatedDocs: true}, (err, _, docs) => {
      return err ? reject(err) : resolve(docs.value)
    })
  })

const findCount = type =>
  new Promise((resolve, reject) => {
    data.find({type}, (err, docs) => {
      if (err) {
        reject(err)
      }
      return docs[0] ? resolve(docs[0].value) : resolve()
    })
  })

export default preferencesData
