import React from "react";
import Headers from "../componentes/Header";
import Footer from "../componentes/Footer";
import CategoriaBoton from "../componentes/CategoriaBoton";
import "./HomeScreen.css"

const categories = [
    { id: 1, name: "Mujer" },
    { id: 2, name: "Hombre" },
   
  ];
 const subcategories = [
    { id: 1, name: "Vestidos", categoryId: 1 },
    { id: 2, name: "Blusas|Camisas", categoryId: 1 },
    { id: 3, name: "Camisetas", categoryId: [1,2] },
    { id: 4, name: "Pantalones", categoryId: [1,2] },
    { id: 5, name: "Jeans", categoryId: [1,2] },
    { id: 6, name: "Faldas", categoryId: 1 },
    { id: 7, name: "Zapatos", categoryId: [1,2] },
    { id: 8, name: "Bolsos", categoryId: 1 },
    { id: 9, name: "Perfumes", categoryId: [1,2] },
    { id:10, name: "Sudaderas", categoryId: [1,2] },
    {id:11,name:"Camisas",categoryId:2},
    {id:12,name:"Trajes",categoryId:2},
    {id:13,name:"Bolsas|Mochilas",categoryId:2}
    
  ];
const HomeScreen=()=>{
     return(
     <>
       <Headers></Headers>
      
      <main>
       <CategoriaBoton categories={categories} subcategories={subcategories}></CategoriaBoton>
       <img className="imagen" src="https://www.shutterstock.com/image-photo/portrait-beautiful-sexy-woman-perfect-260nw-1386034844.jpg"></img>
       <img className="imagen" src="https://img.freepik.com/fotos-premium/mujer-hermosa-joven-modelo-ropa-casual-estilo-moda-cerca-red_338491-2906.jpg"></img>
       <img className="imagen" src="https://cdn.pixabay.com/photo/2018/06/25/17/03/fashion-3497413_1280.jpg"></img>
      
      
       </main>
       <Footer></Footer>
       
     </>

    );



}
export default  HomeScreen;