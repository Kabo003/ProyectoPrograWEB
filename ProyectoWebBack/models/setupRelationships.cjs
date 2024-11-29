import { Categoria } from "./Categoria.cjs";
import { Tipo_Cliente } from "./Tipo_Cliente.cjs";
import { Producto } from "./Producto.cjs";
import { Usuario } from "./Usuario.cjs";
import { Orden } from "./Orden.cjs";
import { Orden_Productos } from "./Orden_Productos.cjs";

export function setupRelationships() {
    // Relación: Categoria tiene muchos Tipo_Cliente
    Tipo_Cliente.hasMany(Categoria, { foreignKey: 'tipo_cliente_id' });
    // Relación: Categoria pertenece a un Tipo_Cliente
    Categoria.belongsTo(Tipo_Cliente, { foreignKey: 'tipo_cliente_id' });

    // Relación: Tipo_Cliente tiene muchos Producto
    Categoria.hasMany(Producto, { foreignKey: 'categoria_id' });
    Producto.belongsTo(Categoria, { foreignKey: 'categoria_id' });

    // Relación: Usuario tiene muchas Orden
    Usuario.hasMany(Orden, { foreignKey: 'id_usuario' });
    Orden.belongsTo(Usuario, { foreignKey: 'id_usuario' });

    // Relación: Orden tiene muchos Orden_Productos
    Orden.hasMany(Orden_Productos, { foreignKey: 'orden_id' });
    Orden_Productos.belongsTo(Orden, { foreignKey: 'orden_id' });

    // Relación: Producto tiene muchos Orden_Productos
    Producto.hasMany(Orden_Productos, { foreignKey: 'producto_id' });
    Orden_Productos.belongsTo(Producto, { foreignKey: 'producto_id' });
}
