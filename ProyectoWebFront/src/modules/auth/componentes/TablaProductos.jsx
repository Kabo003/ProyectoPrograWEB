import React, { useState } from "react";
import "../componentsstilos/TablaProductos.css";




const TablaProductos=({productos})=>{ 
     
  //funcion para que no aparezca el producto dos veces
  const productosUnicos = productos.filter(
      (producto, index, self) =>
      index === self.findIndex((p) => p.nombre === producto.nombre)
  );


    return(
     <div>
        <div className="div-container">
        <section>
        <h3>Tal vez te interese</h3>
        <ul className="table-products">
            {productosUnicos.map((producto)=>(
            <li key={producto.id} >
            <div className="content-img">
               
                  <img src={producto.imagen} alt="" />
                  <button >+</button>
              
        

            </div>

            <div className="content-info">
                 <h4>{producto.nombre}</h4>
                 <p>{producto.precio}</p>
     
            </div>
           
          </li>
          ))}
        

        </ul>
        </section>
        </div>
     </div>
    );
}
export default TablaProductos;