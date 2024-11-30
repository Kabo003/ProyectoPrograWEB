import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize("postgres", "postgres", "Pierogoku09", {
    host: "localhost",
    dialect: "postgres"
});
