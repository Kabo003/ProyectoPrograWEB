import express from 'express';

const app = express();
const port = 3002;

function crearUsuario(id, usuario, contrasenia){
    return{
        id: id,
        usuario: usuario,
        contrasenia: contrasenia,

    }
}

const listaUsuarios = [
    
]

app.post("/registro", function(req, res){
    const data = req.body;
    if (data.usuario && data.contrasenia){
        const newId = listaUsuarios.length + 1;
        const usuario = crearUsuario(newId, data.usuario, data.contrasenia, )
        listaUsuarios.push(usuario)
        res.status(200).send("Creacion de usuario correcta")
    }
    else{
        res.status(404).send("Error al crear el usuario")
        // PREGUNTAR AL PROFE SOBRE EL TEMA DE USUARIOS REPETIDOS
    }
})

app.listen(port, () => {
    console.log("Servidor escuchando en el puerto " + port);
})