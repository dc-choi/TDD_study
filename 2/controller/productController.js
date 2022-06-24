import { product } from '../model/product.js';

export const createProduct = async(req, res, next) => {
	try {
		const result = await product.create(req.body);
		res.status(201).json(result);
	} catch (error) {
		next(error);
	}
};