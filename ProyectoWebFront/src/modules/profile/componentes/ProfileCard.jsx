import { useEffect } from "react";
import { useState } from "react";
import { ObtenerProductos } from "../../products/apiProductos";

export const ProfileCard = () => {

    const [productos, setProductos] = useState([]);

    useEffect(() => {
        const mostrarProductos = async () => {
            const datos = await ObtenerProductos()
            setProductos(datos)
        }
        mostrarProductos();
    })

    return (
        <div className="container">
            <h2>Lista de Productos</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre del Producto</th>
                        <th>Precio</th>
                        <th>Descripción</th>
                        <th>Color</th>
                        <th>Stock</th>
                        <th>Talla</th>
                        <th>Categoría</th>
                        <th>Operaciones</th>
                    </tr>
                </thead>
                <tbody>
                    {productos.map((producto) => (
                        <tr key={producto.id}>
                            <td>{producto.id}</td>
                            <td>{producto.nombre_producto}</td>
                            <td>{producto.precio}</td>
                            <td>{producto.descripcion}</td>
                            <td>{producto.color}</td>
                            <td>{producto.stock}</td>
                            <td>{producto.talla}</td>
                            <td>{producto.categoria_id}</td>
                            <td>
                                <button>eliminar</button>
                                <button>editar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};