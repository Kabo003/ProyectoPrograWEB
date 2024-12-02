import React, { useEffect, useState } from "react";
import Footer from "../componentes/Footer";
import Headers from "../componentes/Header";
import TablaProductos from "../componentes/TablaProductos";
import "./CarritoScreen.css";
const productos = []
  
const CarritoScreen=()=>{

   const [carrito,setcarrito]=useState([]);
   
  
   //const actualizarCarrito=(producto)=>{
   // setcarrito([...carrito,producto]) 
   //}

   const eliminar_producto_Carrito=(id)=>{
      
      setcarrito(carrito.filter((producto)=>producto.id!==id))
         
   }

   useEffect(()=>{   
   },[carrito])




    return(
        <>
      <Headers></Headers>
    
      <div className="cart-content">
       {carrito.length === 0 ? (
      <div className="cart-empty">
      <i className="icon-empty-cart">🛍️</i>
      <h2>Tu cesta está vacía</h2>
       <p>Los artículos que añadas se mostrarán aquí</p>
     </div>
        ) : (
      <ul className="cart-items">
        {carrito.map((item) => (
         <li key={item.id} className="cart-item">
           <img src={item.imagen} alt={item.nombre} className="item-image" />
           <div className="item-details">
            <h3>{item.nombre}</h3>
            <p>PEN {item.precio}</p>
            <p>Talla: {item.talla}</p>
            <p>Color: {item.color}</p>
            <button onClick={()=>eliminar_producto_Carrito(item.id)} className="remove-btn">Eliminar</button>
          </div>
        </li>
      ))}
    </ul>
  )}
</div>
      <TablaProductos productos={productos}></TablaProductos>

      <Footer></Footer>
      </>
    );

}
export default CarritoScreen