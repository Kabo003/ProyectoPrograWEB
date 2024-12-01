import express from 'express';
import { getAllTypes, getProductsByCategory } from './tipoProductController.js';

const routerTipo = express.Router();
routerTipoProducto.get('/:categoriaId/productos', getProductsByCategory);

routerTipo.get('/', getAllTypes);

export default routerTipo;
