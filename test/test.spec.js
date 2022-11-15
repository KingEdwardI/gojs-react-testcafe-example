fixture('test').page('http://localhost:3000/');

test('clicking on a link', async t => {
	await t.wait(5000);

	await t.doubleClick('canvas', {
		offsetX: 239,
		offsetY: 130,
	});

	await t.debug()
})


test('clicking on a node', async t => {
	await t.wait(5000);

	await t.doubleClick('canvas', {
		offsetX: 285,
		offsetY: 72,
	});

	await t.debug()
})
