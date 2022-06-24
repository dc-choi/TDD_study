import { jest } from '@jest/globals' // esm에서는 mock을 사용하기 위해서 jest를 불러와야함.
import httpMocks from 'node-mocks-http';

import { createProduct } from '../../controller/productController.js';
import { product } from '../../model/product.js';
import data from '../data/product.json';

product.create = jest.fn();

let req, res, next;

beforeEach(() => {
	req = httpMocks.createRequest();
	res = httpMocks.createResponse();
	next = jest.fn();
});

describe('productController.createProduct', () => {
	beforeEach(() => {
		req.body = data;
	});

	test('should is function', () => {
		expect(typeof createProduct).toBe('function');
	});

	test('should call product.create', async() => {
		await createProduct(req, res, next);
		expect(product.create).toHaveBeenCalledWith(data);
	});

	test('should return 201 response code', async() => {
		await createProduct(req, res, next);
		expect(res.statusCode).toBe(201);
		expect(res._isEndCalled()).toBeTruthy();
	});

	test('should return json body in response', async() => {
		product.create.mockReturnValue(data);
		await createProduct(req, res, next);
		expect(res._getJSONData()).toStrictEqual(data);
	});
	
	test('should error handling', async() => {
		const errorMessage = { message: 'property missing' };
		const rejectPromise = Promise.reject(errorMessage);
		product.create.mockReturnValue(rejectPromise);
		await createProduct(req, res, next);
		expect(next).toHaveBeenCalledWith(errorMessage);
	});
});