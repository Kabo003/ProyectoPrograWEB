import express from 'express';
import { createOrder, getOrdersByUser } from './ordenController.js';

const router = express.Router();

router.post('/', createOrder);  
router.get('/user/:usuario_id', getOrdersByUser); 

export default router;
