import { jest } from '@jest/globals' // esm에서는 mock을 사용하기 위해서 jest를 불러와야함.
import httpMocks from 'node-mocks-http';

import { createProduct, readProduct, detailProduct } from '../../controller/productController.js';
import { product } from '../../model/product.js';
import data from '../data/product.json';

product.create = jest.fn();
product.find = jest.fn();
product.findById = jest.fn();

const productId = "5qwsirnwuklernqwerqweasdjfnadsjkl";
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

describe('productController.readProduct', () => {
	beforeEach(() => {
		req.body = data;
	});

	test('should is function', () => {
		expect(typeof readProduct).toBe('function');
	});

	test('should call product.find', async() => {
		await readProduct(req, res, next);
		expect(product.find).toHaveBeenCalledWith({});
	});

	test('should return 200 response code', async() => {
		await readProduct(req, res, next);
		expect(res.statusCode).toBe(200);
		expect(res._isEndCalled()).toBeTruthy();
	});

	test('should return json body in response', async() => {
		product.find.mockReturnValue(data);
		await readProduct(req, res, next);
		expect(res._getJSONData()).toStrictEqual(data);
	});

	test('should error handling', async() => {
		const errorMessage = { message: 'Error find' };
		const rejectPromise = Promise.reject(errorMessage);
		product.find.mockReturnValue(rejectPromise);
		await readProduct(req, res, next);
		expect(next).toHaveBeenCalledWith(errorMessage);
	});
});

describe('productController.detailProduct', () => {
	beforeEach(() => {
		req.body = data;
		req.params.id = productId;
	});

	test('should is function', () => {
		expect(typeof detailProduct).toBe('function');
	});

	test('should call product.findById', async() => {
		await detailProduct(req, res, next);
		expect(product.findById).toHaveBeenCalledWith(productId);
	});

	test('should return 200 response code', async() => {
		await detailProduct(req, res, next);
		expect(res.statusCode).toBe(200);
		expect(res._isEndCalled()).toBeTruthy();
	});

	test('should return json body in response', async() => {
		product.findById.mockReturnValue(data);
		await detailProduct(req, res, next);
		expect(res._getJSONData()).toStrictEqual(data);
	});

	test('should error handling', async() => {
		const errorMessage = { message: 'Error findById' };
		const rejectPromise = Promise.reject(errorMessage);
		product.find.mockReturnValue(rejectPromise);
		await readProduct(req, res, next);
		expect(next).toHaveBeenCalledWith(errorMessage);
	});
});