import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Publicacion = sequelize.define(
    "Publicacion", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        titulo: {
            type: DataTypes.STRING
        },
        contenido: {
            type: DataTypes.STRING
        },
        autor: {
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