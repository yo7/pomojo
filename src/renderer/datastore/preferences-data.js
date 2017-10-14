import db from './db'

const data = db.preferences

const preferencesData = {
  updateGoal(count) {
    return new Promise((resolve, reject) => {
      data.update({type: 'goal'}, {type: 'goal', count}, {upsert: true, returnUpdatedDocs: true}, (err, _, docs) => {
        return err ? reject(err) : resolve(docs.count)
      })
    })
  },
  findGoal() {
    return new Promise((resolve, reject) => {
      data.find({type: 'goal'}, (err, docs) => {
        if (err) {
          reject(err)
        }
        return docs[0] ? resolve(docs[0].count) : resolve()
      })
    })
  }
}

export default preferencesData
