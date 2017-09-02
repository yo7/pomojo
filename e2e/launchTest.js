const assert = require('assert')
const createApp = require('./createApp')

describe('Launching the app', function () {
  this.timeout(5000)

  let app
  beforeEach(function () {
    app = createApp()
    return app.start()
  })
  afterEach(function () {
    return app.stop()
  })

  it('renders an window', function () {
    return app.client.getWindowCount().then(count => assert.equal(count, 1))
  })
})
