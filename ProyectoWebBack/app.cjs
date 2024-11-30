import express from 'express';
import cors from 'cors';
import { sequelize } from './database/database.cjs';
import { Categoria } from './models/Categoria.cjs';
import { Orden_Productos } from './models/Orden_Productos.cjs';
import { Orden } from './models/Orden.cjs';
import { Producto } from './models/Producto.cjs';
import { Tipo_Cliente } from './models/Tipo_Cliente.cjs';
import { Usuario } from './models/Usuario.cjs';
import { setupRelationships } from './models/setupRelationships.cjs';

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