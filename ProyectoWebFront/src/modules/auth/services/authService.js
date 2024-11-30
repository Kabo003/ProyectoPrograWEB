const API_URL = ''

export const obtenerProductos = async () => {
    try{
        const response = await fetch(API_URL)
        return await response.json();
    }catch{
        console.error("Error al cargar los productos")
    }
}

export const crearProducto = async (producto) => {
    try{
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(producto)
        })
        return await response.json();
    }catch{
        console.error("Error al crear el producto")
    }
}

export const editarProducto = async (id, nuevoProducto) => {
    try{
        const response = await fetch(`${API_URL}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(nuevoProducto)
        })
        return await response.json();
    }catch{
        console.error("Error al editar un producto")
    }
}

export const eliminarProducto = async (id) => {
    try{
        const response = await fetch(`${API_URL}/${id}`, {
            method: 'PUT',
        })
        return await response.json();
    }catch{
        console.error("Error al eliminar un producto")
    }
}