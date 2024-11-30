//Filtrado de productos para la categorización

const Tipo = require('../../models/Tipo');

const getAllTypes = async (req, res, next) => {
  try {
    const types = await Tipo.findAll();
    res.status(200).json(types);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllTypes,
};
