const URL = '';

// Ejemplo de datos de productos
export const productos = [
  { id: 1, nombre: "Camiseta Blanca", descripcion: "Camiseta de algodón", precio: 19.99, imagen_url: "" },
  { id: 2, nombre: "Pantalones Negros", descripcion: "Pantalones elegantes", precio: 39.99, imagen_url: "" },
];

export const obtenerTablas = async () => {
    try{
        const response = await fetch(URL);
        return await response.json();
    }catch{
        console.error("No existe el producto ")
    }
}

export const crearProducto = async (producto) => {
    try{
        const response = await fetch(URL,{
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(producto)
        })
        return await response.json();
    }catch{
        console.error("Error al crear producto")
    }

}

export const actualizarProducto= async(id, producto) =>{
    try{
        const response = await fetch (`${URL}/${id}`,{
            method: 'PUT',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(producto)
        }); // esperamos a 
        return await response.json();
    }
    catch(error){
        console.error("No se puede editare PIPIPI")
    }
}

export const eliminarPublicacion = async (id, producto) => {
    try{
        const response = await fetch (`${URL}/${id}`,{
            method: 'DELETE',
        }); // esperamos a 
        return await response.json();
    }
    catch(error){
        console.error("No se puede Eliminar PIPIPI")
    }
}