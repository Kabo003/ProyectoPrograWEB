import { DataTypes } from "sequelize";
import { sequelize } from "../config/database,js";

export const Orden_Producto = sequelize.define(
    "Orden_Producto",{
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        }
    },{
        freezeTableName: true
    }
);