import express from 'express'
import cors from 'cors'
import { sequelize } from './config/database.js';
import { Usuario } from './models/Usuario.js';

const app = express();
const port = 3002;

app.use(express.json());
app.use(cors());

async function verificarConexion(){
    try{
        await sequelize.authenticate();
        console.log("Conexion a BD exitosa")
        await sequelize.sync();
    }catch (error){
        console.error("Ocurrio un error con la conexion a la BD", error)
    }
}

app.listen(port, () => {
    console.log("Servidor esta activo en puerto " + port);
    verificarConexion();
});