const path = require('path')
const Application = require('spectron').Application
const electron = require('electron')

const createApp = (args) => {
  const baseDir = path.join(__dirname, '../..')
  return new Application({
    path: electron,
    args: [baseDir].concat(args)
  })
}

module.exports = createApp
