import React from "react";

const BuscarScreen = () => {
    return(
        <div>
            <h4>¿Que estás buscando?</h4>

            <select id="options" name="options">
                <option value="Producto 1">Low Rise</option>
                <option value="Producto 2">Impermeable</option>
                <option value="Producto 3">Jean Carrot</option>
                <option value="Producto 4">Camiseta Crop</option>
                <option value="Prooducto 5">Camisa a Rayas</option>
            </select>

            <input placeholder="Buscar..." id="buscar"></input>

        <table>
            <thead>
                <tr>
                    <th>Producto 1</th>
                    <th>Producto 2</th>
                    <th>Producto 3</th>
                    <th>Producto 4</th>
                    <th>Producto 5</th>
                    <th>Producto 6</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Imagen</td>
                    <td>Nombre</td>
                    <td>descripcion</td>
                    <td>Precio</td>
                </tr>
                <tr>
                    <td>Imagen</td>
                    <td>Nombre</td>
                    <td>descripcion</td>
                    <td>Precio</td>
                </tr>
                <tr>
                    <td>Imagen</td>
                    <td>Nombre</td>
                    <td>descripcion</td>
                    <td>Precio</td>
                </tr>
                <tr>
                    <td>Imagen</td>
                    <td>Nombre</td>
                    <td>descripcion</td>
                    <td>Precio</td>
                </tr>
                <tr>
                    <td>Imagen</td>
                    <td>Nombre</td>
                    <td>descripcion</td>
                    <td>Precio</td>
                </tr>
                <tr>
                    <td>Imagen</td>
                    <td>Nombre</td>
                    <td>descripcion</td>
                    <td>Precio</td>
                </tr>
            </tbody>
        </table>
        </div>
    )
}

export default BuscarScreen;