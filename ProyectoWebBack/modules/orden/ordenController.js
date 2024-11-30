import { Orden } from '../../models/Orden.js';
import { ProductoOrden } from '../../models/Orden_Productos.js';

const createOrder = async (req, res, next) => {
  try {
    const { usuario_id, productos, total, direccion, metodoPago, nroTarjeta } = req.body;

    const newOrder = await Orden.create({ usuario_id, total, direccion, metodoPago, nroTarjeta });

    if (productos && productos.length > 0) {
      const productosOrden = productos.map(producto => ({
        orden_id: newOrder.id,
        producto_id: producto.id,
      }));
      await ProductoOrden.bulkCreate(productosOrden);
    }

    res.status(201).json({ message: 'Orden creada', order: newOrder });
  } catch (error) {
    next(error);
  }
};

const getOrdersByUser = async (req, res, next) => {
  try {
    const { usuario_id } = req.params;
    const orders = await Orden.findAll({ where: { usuario_id }, include: ['productos'] });
    res.status(200).json(orders);
  } catch (error) {
    next(error);
  }
};

export { createOrder, getOrdersByUser };
