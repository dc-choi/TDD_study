const www = require('../bin/www');
const supertest = require('supertest');
const should = require('should');

// 통합 테스트 예제
describe('GET /', () => {
	describe('성공시', () => {
		it('index test...', (done) => {
			supertest(www)
				.get('/')
				.end((err, res) => {
					done();
				})
		});
	})
	describe('실패시', () => {
		it('index test...', (done) => {
			supertest(www)
				.get('/index')
				.expect(404)
				.end((err, res) => {
					done();
				})
		});
	})
});

describe('GET /users', () => {
	it('users test...', (done) => {
		supertest(www)
			.get('/users')
			.end((err, res) => {
				console.log(res.body);
				res.body.should.instanceof(Object);
				// res.body.should.have.property('title', 'Express');
				// res.body.should.equal('respond with a resource');
				done();
			})
	});
});