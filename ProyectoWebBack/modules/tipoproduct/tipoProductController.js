import { Categoria } from '../../models/Categoria.js';

export const getAllTypes = async (req, res, next) => {
  try {
    const types = await Categoria.findAll();
    res.status(200).json(types);
  } catch (error) {
    next(error);
  }
};
