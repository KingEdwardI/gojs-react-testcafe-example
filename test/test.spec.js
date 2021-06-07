fixture('test').page('http://localhost:3000/');

test.skip('test', async t => {
	await t.maximizeWindow()
	await t.wait(5000);

	await t.doubleClick('canvas', {
		offsetX: 239,
		offsetY: 130,
	});

	await t.wait(60000)
})


test('test 2', async t => {
	await t.maximizeWindow()
	await t.wait(5000);

	await t.doubleClick('canvas', {
		offsetX: 285,
		offsetY: 72,
	});

	await t.wait(60000)
})
