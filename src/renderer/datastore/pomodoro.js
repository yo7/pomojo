import format from 'date-fns/format'
import db from './db'

const data = db.pomodoro
const today = format(new Date(), 'YYYY/MM/DD')

const exists = () => new Promise((resolve, reject) =>
  data.count({date: today}, (err, count) => err ? reject(err) : resolve(count > 0)))

const update = () => new Promise((resolve, reject) =>
  data.update({date: today}, {$inc: {count: 1}}, err => err ? reject(err) : resolve()))

const insert = () => new Promise((resolve, reject) =>
  data.insert({date: today, count: 1}, err => err ? reject(err) : resolve()))

const pomodoro = {
  async add() {
    try {
      return await exists() ? update() : insert()
    } catch (err) {
      console.error(err)
    }
  },
  todayCount() {
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
