// models/ProductoCategoria.cjs
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Producto = require('./Producto');
const Categoria = require('./Categoria');

const ProductoCategoria = sequelize.define('ProductoCategoria', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  producto_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Producto,
      key: 'id',
    },
  },
  categoria_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Categoria,
      key: 'id',
    },
  },
}, {
  freezeTableName: true,
});

// Relación Producto-Categoría
Producto.belongsToMany(Categoria, { through: ProductoCategoria, foreignKey: 'producto_id' });
Categoria.belongsToMany(Producto, { through: ProductoCategoria, foreignKey: 'categoria_id' });

module.exports = ProductoCategoria;
