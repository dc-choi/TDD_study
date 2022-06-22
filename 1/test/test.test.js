const should = require('should');

const fuc = (str) => {
	return str;
};

// 단위 테스트 예제
describe('fuc', () => {
	describe('성공시', () => {
		it('fuc', () => {
			const result = fuc('hello');
			result.should.equal('hello');
		});
	})
	describe('실패시', () => {
		it('fuc', () => {
			const result = fuc('hello');
			result.should.equal('hello');
		});
	})
});