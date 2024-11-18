// models/Tipo.cjs
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Tipo = sequelize.define('Tipo', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  freezeTableName: true,
});

module.exports = Tipo;
