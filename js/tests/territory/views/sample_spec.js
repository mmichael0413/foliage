define(function (require) {
	
	describe("Simple Test" , function () {
		it('should be true', function () {
			expect(true).toBe(true);
		});
		it('should also pass', function () {
			expect(6).toBeGreaterThan(5);
		});
	});
});