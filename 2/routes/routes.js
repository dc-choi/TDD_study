import express from 'express';

import { index } from '../controller/indexController.js';
import { products } from '../controller/productController.js';
import { bird } from '../controller/birdController.js';

const router = express.Router();

router.get('/', index);

router.post('/products', products);

router.get('/bird', bird);

export default router;