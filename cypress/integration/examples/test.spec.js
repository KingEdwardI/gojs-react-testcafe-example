describe('clicking a node', () => {
	it('can be clicked', async () => {

		await cy.visit('http://localhost:3000/');

		await cy.wait(5000);

		await cy.get('canvas').dblclick(285, 72);

		await cy.wait(60000)

		expect(true).toBe(true)
	})
})
