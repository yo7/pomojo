import format from 'date-fns/format'
import db from './db'

const data = db.pomodoro
const today = format(new Date(), 'YYYY/MM/DD')

const pomodoro = {
  update() {
    return new Promise((resolve, reject) =>
      data.update({date: today}, {$inc: {count: 1}}, {upsert: true, returnUpdatedDocs: true}, (err, _, docs) => {
        return err ? reject(err) : resolve(docs.count)
      })
    )
  },
  today() {
    return new Promise((resolve, reject) =>
      data.find({date: today}, (err, docs) => {
        if (err) {
          reject(err)
        }
        return docs[0] ? resolve(docs[0].count) : resolve(0)
      })
    )
  }
}

export default pomodoro
