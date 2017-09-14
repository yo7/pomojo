import test from 'ava'
import createApp from './helper/createApp'

test.beforeEach(async t => {
  t.context.app = createApp()
  await t.context.app.start()
})

test.afterEach.always(async t => {
  try {
    await t.context.app.stop()
  } catch (error) {
    console.log('error occured while quitting: \n', error)
  }
})

test('Launching the app renders a window', async t => {
  const app = t.context.app
  await app.client.waitUntilWindowLoaded()

  t.is(await app.client.getWindowCount(), 1)
})

test('Launching the app renders a window with specified size', async t => {
  const app = t.context.app
  await app.client.waitUntilWindowLoaded()

  const {width, height} = await app.browserWindow.getBounds()
  t.is(width, 500)
  t.is(height, 600)
})