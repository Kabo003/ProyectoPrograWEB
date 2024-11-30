import express from 'express';
import { getAllTypes } from './tipoProductController.js';

const router = express.Router();

router.get('/', getAllTypes);

export default router;
