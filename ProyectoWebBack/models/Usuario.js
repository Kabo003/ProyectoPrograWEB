import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";
import { Orden } from "./Orden.js";

export const Usuario = sequelize.define(
    "Usuario",{
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre:{
            type: DataTypes.STRING
        },
        contrasenia:{
            type: DataTypes.STRING
        },
        estado: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        }
    }, {
        freezeTableName: true
    }
);

Usuario.hasMany(Orden, {
    foreignKey: "usuarioId",
    sourceKey: "id"
})

Orden.belongsTo(Usuario, {
    foreignKey: "usuarioId",
    targetKey: "id"
})