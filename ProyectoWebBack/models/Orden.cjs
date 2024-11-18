import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";
import { Orden_Producto } from "./Orden_Producto.js";
import { Producto } from "./Producto.cjs";

export const Orden = sequelize.define(
    "Orden", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        fechaOrden: {
            type: DataTypes.DATEONLY,
        },
        total: {
            type: DataTypes.INTEGER
        },
        direccion: {
            type: DataTypes.STRING
        },
        metodoPago: {
            type: DataTypes.STRING
        },
        nroTarjeta: {
            type: DataTypes.INTEGER
        },
    }, {
        freezeTableName: true
    }
)

Orden.belongsToMany(Producto,{
    through: Orden_Producto,
    foreignKey: "ordenId"
});

Producto.belongsToMany(Orden,{
    through: Orden_Producto,
    foreignKey: "productoId"
});