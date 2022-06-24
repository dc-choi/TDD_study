import express from 'express';

import { index } from '../controller/indexController.js';
import { createProduct } from '../controller/productController.js';
import { bird } from '../controller/birdController.js';

const router = express.Router();

router.get('/api', index);

router.post('/api/product', createProduct);

router.get('/api/bird', bird);

export default router;