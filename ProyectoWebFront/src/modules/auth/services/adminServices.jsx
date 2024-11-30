import { useEffect } from "react";
import { crearProducto, editarProducto, eliminarProducto, obtenerProductos } from "./authService.js";

function adminServices() {
    const [productos, setProductos] = useState([]);
    const [productosEditable, setProductosEditable] = useState(null);

    useEffect(() => {
        const mostrarProductos = async () => {
            const datos = await obtenerProductos();
            setProductos(datos)
        }
        mostrarProductos();
    })

    const agregarProducto = async (producto) => {
        const nuevoProducto = await crearProducto(producto);
        if (nuevoProducto){
            setProductos([...productos, nuevoProducto])
        }
    }

    const eliminarUnProducto = async (id) => {
        await eliminarProducto(id);
        setProductos(productos.filter(producto => producto.id == id));
    }

    const actualizarProducto = async (id, productoActual) => {
        const actualizado = await editarProducto(id, productoActual);
        setProductos(
            productos.map((producto) =>
                producto.id === id ? actualizado : producto
            )
        )
        setProductosEditable(null);
    }

    const prepararEdicion = (producto) => {
        setProductosEditable(producto);
    };

    return(
        <div>

        </div>
    )
}