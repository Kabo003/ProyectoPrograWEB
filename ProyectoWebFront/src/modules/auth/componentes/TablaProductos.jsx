import React, { useState } from "react";
import "../componentsstilos/TablaProductos.css";


const TablaProductos=({productos})=>{ 
     

    return(
     <div>
        <div className="div-container">
        <section>
        <h3>Tal vez te interese</h3>
        <ul className="table-products">
            {productos.map((producto)=>(
            <li key={producto.id} >
            <div className="content-img">
               
                  <img src={producto.imagen} alt="" />
                 
              
        

            </div>

            <div className="content-info">
                 <h4>{producto.nombre_produto}</h4>
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