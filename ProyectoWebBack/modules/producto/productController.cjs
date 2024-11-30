//Para mostrar la información de los productos en el FRONT

const Producto = import('../../models/Producto');

const getAllProducts = async (req, res, next) => {
  try {
    const products = await Producto.findAll();
    res.status(200).json(products);
  } catch (error) {
    next(error);
  }
};

const getProductById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await Producto.findByPk(id);
    if (!product) return res.status(404).json({ message: 'Producto no encontrado' });
    res.status(200).json(product);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllProducts,
  getProductById,
};
