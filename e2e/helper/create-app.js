const path = require('path')
const Application = require('spectron').Application

const createApp = () => {
  const electronPath = path.resolve(__dirname, '../../node_modules/.bin/electron')
  const appPath = path.resolve(__dirname, '../..')

  return new Application({
    path: electronPath,
    args: [appPath]
  })
}

module.exports = createApp
