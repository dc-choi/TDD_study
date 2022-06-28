import express from 'express';

import { index } from '../controller/indexController.js';
import { createProduct, readProduct, detailProduct } from '../controller/productController.js';
import { bird } from '../controller/birdController.js';

const router = express.Router();

router.get('/api', index);

router.get('/api/product', readProduct);
router.get('/api/product/:id', detailProduct);
router.post('/api/product', createProduct);

router.get('/api/bird', bird);

export default router;