import express from 'express';
import { getAllTypes } from './tipoProductController.js';

const routerTipo = express.Router();

routerTipo.get('/', getAllTypes);

export default routerTipo;
