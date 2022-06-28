import { product } from '../model/product.js';

export const createProduct = async(req, res, next) => {
	try {
		const result = await product.create(req.body);
		res.status(201).json(result);
	} catch (error) {
		next(error);
	}
};

export const readProduct = async(req, res, next) => {
	try {
		const result = await product.find({});
		res.status(200).json(result);
	} catch (error) {
		next(error);
	}
};

export const detailProduct = async(req, res, next) => {
	try {
		const result = await product.findById(req.params.id);
		res.status(200).json(result);
	} catch (error) {
		next(error);
	}
};

export const updateProduct = async(req, res, next) => {
	try {
		const result = await product.updateMany();
		res.status(200).json(result);
	} catch (error) {
		next(error);
	}
};

export const deleteProduct = async(req, res, next) => {
	try {
		const result = await product.find({});
		res.status(200).json(result);
	} catch (error) {
		next(error);
	}
};