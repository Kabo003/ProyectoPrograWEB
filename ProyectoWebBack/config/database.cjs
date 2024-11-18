import { Sequelize } from "sequelize";

export const sequelize = new Sequelize("ProyectoPW", "postgres", "cyvo1912", {
    host: "localhost",
    dialect: "postgres"
});