import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";
import { Producto } from "./Producto.js";

export const TipoProducto = sequelize.define(
    "TipoProducto",{
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nombre: {
            type: DataTypes.STRING
        }
    },{
        freezeTableName: true
    }
);

TipoProducto.hasMany(Producto, {
    foreignKey: "tipoProductoId",
    sourceKey: "id"
});

Producto.belongsTo(TipoProducto, {
    foreignKey: "tipoProductoid",
    targetKey: "id"
})

