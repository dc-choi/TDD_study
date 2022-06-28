import request from 'supertest';

import app from '../../server.js';
import data from '../data/product.json';

const productId = "62b9a047aed22032e026e431";

describe('Integration Test /api/product', () => {
	afterAll((done) => {
		app.close(() => {
			done();
		});
	});

	test('POST /api/product', async() => {
		const res = await request(app).post('/api/product').send(data);
		expect(res.statusCode).toBe(201);
		expect(res.body.name).toBe(data.name);
		expect(res.body.description).toBe(data.description);
		expect(res.body.price).toBe(data.price);
	});

	test('POST /api/product should return 500', async() => {
		const res = await request(app).post('/api/product').send({
			name: "donchoi",
			// description: "donchoi's computer",
			price: 1111
		});
		expect(res.statusCode).toBe(500);
		expect(res.body.message);
	});

	test('GET /api/product', async() => {
		const res = await request(app).get('/api/product');
		expect(res.statusCode).toBe(200);
		expect(Array.isArray(res.body)).toBeTruthy();
		expect(res.body[0].name).toBeDefined();
		expect(res.body[0].description).toBeDefined();
	});

	test('GET /api/product/:id', async() => {
		const res = await request(app).get(`/api/product/${productId}`);
		expect(res.statusCode).toBe(200);
		expect(res.body.name).toBe(data.name);
		expect(res.body.description).toBe(data.description);
		expect(res.body.price).toBe(data.price);
	});
});