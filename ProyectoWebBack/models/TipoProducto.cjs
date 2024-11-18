import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";
import { Producto } from "./Producto.js";
import {Tipo} from "./TIpo.cjs"

export const TipoProducto = sequelize.define(
    "TipoProducto",{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    color: {
        type: DataTypes.STRING,
    },
    talla: {
        type: DataTypes.STRING,
    },
    producto_id: {
        type: DataTypes.INTEGER,
        references: {
        model: Producto,
        key: 'id',
        },
    },
    tipo_id: {
        type: DataTypes.INTEGER,
        references: {
        model: Tipo,
        key: 'id',
        },
    },
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

