describe('calculation', () => {
	test('two plus to is four', () => {
		expect(2 + 2).toBe(4);
	});
	
	test('two plus to is not five', () => {
		expect(2 + 2).not.toBe(5);
	});
});