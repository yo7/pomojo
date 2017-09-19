import test from 'ava';
import createApp from './helper/create-app';

test.beforeEach(async t => {
	t.context.app = createApp();
	await t.context.app.start();
});

test.afterEach.always(async t => {
	try {
		await t.context.app.stop();
	} catch (err) {
		console.log('error occured while quitting: \n', err);
	}
});

test('Window should not be resizable', async t => {
	const app = t.context.app;
	await app.client.waitUntilWindowLoaded();

	t.is(await app.browserWindow.isResizable(), false);
});

test('window should be hidden on blur', async t => {
	const app = t.context.app;
	await app.client.waitUntilWindowLoaded();

	await app.browserWindow.blur();
	t.is(await app.browserWindow.isVisible(), false);
});
