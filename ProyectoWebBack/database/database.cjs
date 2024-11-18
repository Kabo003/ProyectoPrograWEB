import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize("ejemplodemo", "postgres", "admin", {
    host: "localhost",
    dialect: "postgres"
});
