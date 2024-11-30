import express from 'express';
import cors from 'cors';
import { sequelize } from './database/database.js';
import { Categoria } from './models/Categoria.js';
import { Orden_Productos } from './models/Orden_Productos.js';
import { Orden } from './models/Orden.js';
import { Producto } from './models/Producto.js';
import { Tipo_Cliente } from './models/Tipo_Cliente.js';
import { Usuario } from './models/Usuario.js';
import { setupRelationships } from './models/setupRelationships.js';

const app = express();
const port = 3002;

app.use(express.json());
app.use(cors());

setupRelationships();

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