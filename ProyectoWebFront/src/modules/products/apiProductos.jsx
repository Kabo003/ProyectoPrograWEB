const URL = 'https://backendweb-xzp6.onrender.com';

export const ObtenerProductos = async () => {
    try{
        const response = await fetch(`${URL}/products`);
        return await response.json();
    }catch{
        console.error("Error al cargar la tabla")
    }
}
