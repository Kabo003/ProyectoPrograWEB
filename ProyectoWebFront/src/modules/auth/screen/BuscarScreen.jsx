import React from "react";
import Footer from "../componentes/Footer";
import Headers from "../componentes/Header";
import TablaProductos from "../componentes/TablaProductos";


const tipo_cliente = [
  { id: 1, nombre: "Hombre" },
  { id: 2, nombre: "Mujer" },
  { id: 3, nombre: "Niño" }
];


const categories = [
  { id: 1, name: "Mujer - Vestidos", tipo_clienteId: 2 },
  { id: 2, name: "Mujer - Blusas|Camisas", tipo_clienteId: 2 },
  { id: 3, name: "Mujer - Camisetas", tipo_clienteId: 2 },
  { id: 4, name: "Mujer - Pantalones", tipo_clienteId: 2 },
  { id: 5, name: "Mujer - Jeans", tipo_clienteId: 2 },
  { id: 6, name: "Mujer - Faldas", tipo_clienteId: 2 },
  { id: 7, name: "Mujer - Zapatos", tipo_clienteId: 2 },
  { id: 8, name: "Mujer - Bolsos", tipo_clienteId: 2 },
  { id: 9, name: "Mujer - Perfumes", tipo_clienteId: 2 },
  { id: 10, name: "Mujer - Sudaderas", tipo_clienteId: 2 },
  { id: 11, name: "Hombre - Camisetas", tipo_clienteId: 1 },
  { id: 12, name: "Hombre - Pantalones", tipo_clienteId: 1 },
  { id: 13, name: "Hombre - Jeans", tipo_clienteId: 1 },
  { id: 14, name: "Hombre - Zapatos", tipo_clienteId: 1 },
  { id: 15, name: "Hombre - Perfumes", tipo_clienteId: 1 },
  { id: 16, name: "Hombre - Sudaderas", tipo_clienteId: 1 },
  { id: 17, name: "Hombre - Trajes", tipo_clienteId: 1 },
  { id: 18, name: "Hombre - Camisas", tipo_clienteId: 1 },
  { id: 19, name: "Hombre - Mochilas", tipo_clienteId: 1 },
  { id: 20, name: "Niño - Zapatos", tipo_clienteId: 3 },
  { id: 21, name: "Niño - Perfumes", tipo_clienteId: 3 },
  { id: 22, name: "Niño - Mochilas", tipo_clienteId: 3 },
  { id: 23, name: "Niño - Trajes", tipo_clienteId: 3 }
  
];

const productos = [
 
    // Ropa (con tallas S y M)
    { id: 1, nombre: "Vestido Casual Largo", precio: "199.00", imagen: "https://d3fvqmu2193zmz.cloudfront.net/items_2/uid_commerces.1/uid_items_2.FDL87A9TZB1G/500x500/65B270E86F794-Vestido-Casual-Mujer-Largo-Ale.webp", tipo_cliente_id: 2, color: "Rojo", talla: "S", stock: 10, descripcion: "Vestido largo de color rojo, ideal para ocasiones casuales." },
    { id: 2, nombre: "Vestido Casual Largo", precio: "199.00", imagen: "https://d3fvqmu2193zmz.cloudfront.net/items_2/uid_commerces.1/uid_items_2.FDL87A9TZB1G/500x500/65B270E86F794-Vestido-Casual-Mujer-Largo-Ale.webp", tipo_cliente_id: 2, color: "Rojo", talla: "M", stock: 12, descripcion: "Vestido largo de color rojo, ideal para ocasiones casuales." },
  
    { id: 3, nombre: "Blusa con Encaje", precio: "149.00", imagen: "https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/c3f106018ebbe96538a03a5840f2bde5.jpg", tipo_cliente_id: 2, color: "Blanco", talla: "S", stock: 8, descripcion: "Blusa blanca con encaje, perfecta para eventos formales." },
    { id: 4, nombre: "Blusa con Encaje", precio: "149.00", imagen: "https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/c3f106018ebbe96538a03a5840f2bde5.jpg", tipo_cliente_id: 2, color: "Blanco", talla: "M", stock: 10, descripcion: "Blusa blanca con encaje, perfecta para eventos formales." },
  
    { id: 5, nombre: "Camiseta Estampada", precio: "99.00", imagen: "https://m.media-amazon.com/images/I/71tlYWmr5LL.jpg", tipo_cliente_id: 2, color: "Azul", talla: "S", stock: 15, descripcion: "Camiseta azul con estampado vibrante, ideal para el día a día." },
    { id: 6, nombre: "Camiseta Estampada", precio: "99.00", imagen: "https://m.media-amazon.com/images/I/71tlYWmr5LL.jpg", tipo_cliente_id: 2, color: "Azul", talla: "M", stock: 10, descripcion: "Camiseta azul con estampado vibrante, ideal para el día a día." },
  
    // Zapatos (con tallas 36 y 41)
    { id: 7, nombre: "Zapatos de Tacón", precio: "249.00", imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUYN1WvJXcJ2Tw7T1SrsO1-jlDYrJbhQrRtA&s", tipo_cliente_id: 2, color: "Negro", talla: "36", stock: 10, descripcion: "Zapatos de tacón en color negro, ideales para eventos formales." },
    { id: 8, nombre: "Zapatos de Tacón", precio: "249.00", imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUYN1WvJXcJ2Tw7T1SrsO1-jlDYrJbhQrRtA&s", tipo_cliente_id: 2, color: "Negro", talla: "41", stock: 8, descripcion: "Zapatos de tacón en color negro, ideales para eventos formales." },
  
    { id: 9, nombre: "Zapatos Deportivos", precio: "159.00", imagen: "https://oechsle.vteximg.com.br/arquivos/ids/17285613-800-800/2566850_1.jpg", tipo_cliente_id: 3, color: "Blanco", talla: "36", stock: 12, descripcion: "Zapatos deportivos para niños, cómodos y resistentes." },
    { id: 10, nombre: "Zapatos Deportivos", precio: "159.00", imagen: "https://oechsle.vteximg.com.br/arquivos/ids/17285613-800-800/2566850_1.jpg", tipo_cliente_id: 3, color: "Blanco", talla: "41", stock: 10, descripcion: "Zapatos deportivos para niños, cómodos y resistentes." },
  
    // Perfumes (sin talla)
    { id: 11, nombre: "Perfume Floral Dulce", precio: "499.00", imagen: "https://media.vogue.es/photos/63dcf75b52c24dd9f69174e7/3:4/w_748%2Cc_limit/image%2520(41).png", tipo_cliente_id: 2, color: "N/A", talla: "N/A", stock: 20, descripcion: "Perfume floral con notas dulces, ideal para el día a día." },
    { id: 12, nombre: "Perfume Amaderado", precio: "599.00", imagen: "https://media.vogue.mx/photos/63e3d3897b4a6f9b0cad5e09/master/w_1600%2Cc_limit/Perfumes-Amaderados-Hombre-Terre-Hermes.jpg", tipo_cliente_id: 1, color: "N/A", talla: "N/A", stock: 15, descripcion: "Perfume amaderado con un aroma sofisticado para hombres." },
    { id: 13, nombre: "Bolso de Mano Elegante", precio: "299.00", imagen: "https://m.media-amazon.com/images/I/71e4r65rnYL.jpg", tipo_cliente_id: 2, color: "Beige", talla: "N/A", stock: 10, descripcion: "Bolso de mano elegante con diseño minimalista." },
    { id: 14, nombre: "Mochila Escolar", precio: "199.00", imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7fbvP3xbBRxtzmE-RA3-8Bc02djXQPin94A&s", tipo_cliente_id: 3, color: "Azul", talla: "N/A", stock: 15, descripcion: "Mochila escolar resistente y espaciosa." },
    // Bolsos (sin talla)

    { id: 15, nombre: "Camiseta Básica", precio: "89.00", imagen: "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaPE/20569761_1/w=800,h=800,fit=pad", tipo_cliente_id: 1, color: "Gris", talla: "S", stock: 12, descripcion: "Camiseta básica gris, ideal para uso diario." },
    { id: 16, nombre: "Camiseta Básica", precio: "89.00", imagen: "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaPE/20569761_1/w=800,h=800,fit=pad", tipo_cliente_id: 1, color: "Gris", talla: "M", stock: 14, descripcion: "Camiseta básica gris, ideal para uso diario." },
  
    { id: 17, nombre: "Jeans Rectos", precio: "179.00", imagen: "https://f.fcdn.app/imgs/3228d1/www.otherside.com.uy/osiduy/48c6/original/catalogo/OS7MGPS2-338-1/2000-2000/jean-recto-azul-oscuro.jpg", tipo_cliente_id: 1, color: "Azul Oscuro", talla: "S", stock: 10, descripcion: "Jeans rectos azul oscuro, cómodos y resistentes." },
    { id: 18, nombre: "Jeans Rectos", precio: "179.00", imagen: "https://f.fcdn.app/imgs/3228d1/www.otherside.com.uy/osiduy/48c6/original/catalogo/OS7MGPS2-338-1/2000-2000/jean-recto-azul-oscuro.jpg", tipo_cliente_id: 1, color: "Azul Oscuro", talla: "M", stock: 8, descripcion: "Jeans rectos azul oscuro, cómodos y resistentes." },
  
    // Zapatos (con tallas 36 y 41)
    { id: 19, nombre: "Zapatos Elegantes", precio: "399.00", imagen: "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaPE/132919065_01/w=1500,h=1500,fit=pad", tipo_cliente_id: 1, color: "Marrón", talla: "36", stock: 10, descripcion: "Zapatos elegantes marrones, perfectos para ocasiones formales." },
    { id: 20, nombre: "Zapatos Elegantes", precio: "399.00", imagen: "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaPE/132919065_01/w=1500,h=1500,fit=pad", tipo_cliente_id: 1, color: "Marrón", talla: "41", stock: 8, descripcion: "Zapatos elegantes marrones, perfectos para ocasiones formales." },
  
    { id: 21, nombre: "Zapatos Escolares", precio: "149.00", imagen: "https://conterspe.vtexassets.com/arquivos/ids/190252-800-auto?v=638436982372100000&width=800&height=auto&aspect=true", tipo_cliente_id: 3, color: "Negro", talla: "36", stock: 12, descripcion: "Zapatos escolares negros, ideales para uso diario." },
    { id: 22, nombre: "Zapatos Escolares", precio: "149.00", imagen: "https://conterspe.vtexassets.com/arquivos/ids/190252-800-auto?v=638436982372100000&width=800&height=auto&aspect=true", tipo_cliente_id: 3, color: "Negro", talla: "41", stock: 10, descripcion: "Zapatos escolares negros, ideales para uso diario." },
  
    // Perfumes (sin talla)
    { id: 23, nombre: "Perfume Fresco Infantil", precio: "129.00", imagen: "https://http2.mlstatic.com/D_NQ_NP_715933-MLA74071010690_012024-O.webp", tipo_cliente_id: 3, color: "N/A", talla: "N/A", stock: 20, descripcion: "Perfume fresco con aroma suave, ideal para niños." },
    { id: 24, nombre: "Perfume Amaderado Intenso", precio: "599.00", imagen: "https://rimage.ripley.com.pe/home.ripley/Attachment/MKP/5193/PMP20000569200/full_image-1.jpeg", tipo_cliente_id: 1, color: "N/A", talla: "N/A", stock: 15, descripcion: "Perfume amaderado con una fragancia duradera." },
  
    // Bolsos (sin talla)
    { id: 25, nombre: "Mochila Urbana", precio: "349.00", imagen: "https://samsonite.com.pe/cdn/shop/files/7321337572ccc96346417d060e87cd3b7a1dea7beaf62939ec1aa4dbfc9b50a0.jpg", tipo_cliente_id: 1, color: "Negro", talla: "N/A", stock: 12, descripcion: "Mochila urbana negra, espaciosa y resistente." },
    { id: 26, nombre: "Bolso Tote de Cuero", precio: "349.00", imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkvtDP28jgpGmBBH0YENyKY9vy6AAXo1euDw&s", tipo_cliente_id: 2, color: "Marrón", talla: "N/A", stock: 10, descripcion: "Bolso tote de cuero marrón, elegante y funcional." },
  
    // Ropa adicional (para completar hasta 50 productos)
    { id: 27, nombre: "Pantalón Chino", precio: "189.00", imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKiDNOuBl73Q_r5MyJQYVz-eKc4dCvOy-LoQ&s", tipo_cliente_id: 1, color: "Caqui", talla: "S", stock: 15, descripcion: "Pantalón chino en color caqui, ideal para ocasiones casuales." },
    { id: 28, nombre: "Pantalón Chino", precio: "189.00", imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKiDNOuBl73Q_r5MyJQYVz-eKc4dCvOy-LoQ&s", tipo_cliente_id: 1, color: "Caqui", talla: "M", stock: 10, descripcion: "Pantalón chino en color caqui, ideal para ocasiones casuales." },
  
    { id: 29, nombre: "Traje Completo Infantil", precio: "299.00", imagen: "https://rimage.ripley.com.pe/home.ripley/Attachment/MKP/3514/PMP20000272984/full_image-1.jpeg", tipo_cliente_id: 3, color: "Gris", talla: "S", stock: 6, descripcion: "Traje completo para niños, ideal para eventos especiales." },
    { id: 30, nombre: "Traje Completo Infantil", precio: "299.00", imagen: "https://rimage.ripley.com.pe/home.ripley/Attachment/MKP/3514/PMP20000272984/full_image-1.jpeg", tipo_cliente_id: 3, color: "Gris", talla: "M", stock: 8, descripcion: "Traje completo para niños, ideal para eventos especiales." },
  
    { id: 31, nombre: "Falda Corta Plisada", precio: "129.00", imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFkqTGYlSTE9VOfTen0ZFh1qeWFqy9N9_4qg&s", tipo_cliente_id: 2, color: "Rosa", talla: "S", stock: 10, descripcion: "Falda corta plisada, ideal para primavera." },
    { id: 32, nombre: "Falda Corta Plisada", precio: "129.00", imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFkqTGYlSTE9VOfTen0ZFh1qeWFqy9N9_4qg&s", tipo_cliente_id: 2, color: "Rosa", talla: "M", stock: 8, descripcion: "Falda corta plisada, ideal para primavera." },
    { id: 33, nombre: "Sudadera Deportiva", precio: "129.00", imagen: "https://i.pinimg.com/originals/55/be/48/55be48fe7677e803b3d8025bec053db0.jpg", tipo_cliente_id: 1, color: "Rojo", talla: "S", stock: 12, descripcion: "Sudadera deportiva en color rojo, cómoda y cálida." },
    { id: 34, nombre: "Sudadera Deportiva", precio: "129.00", imagen: "https://i.pinimg.com/originals/55/be/48/55be48fe7677e803b3d8025bec053db0.jpg", tipo_cliente_id: 1, color: "Rojo", talla: "M", stock: 14, descripcion: "Sudadera deportiva en color rojo, cómoda y cálida." },

    { id: 35, nombre: "Camisa Formal Slim Fit", precio: "149.00", imagen: "https://tiendasel.vteximg.com.br/arquivos/ids/20136840-455-455/-new_desc----marca-donatelli----modelo-3slsl011----genero-hombre----entalle-slim-fit----labrado-no----planchado-si----tipo-de-pu%C3%B1o-pu%C3%91o-simple----comp.jpg?v=638307505952030000", tipo_cliente_id: 1, color: "Blanco", talla: "S", stock: 9, descripcion: "Camisa formal entallada para ocasiones importantes." },
    { id: 36, nombre: "Camisa Formal Slim Fit", precio: "149.00", imagen: "https://tiendasel.vteximg.com.br/arquivos/ids/20136840-455-455/-new_desc----marca-donatelli----modelo-3slsl011----genero-hombre----entalle-slim-fit----labrado-no----planchado-si----tipo-de-pu%C3%B1o-pu%C3%91o-simple----comp.jpg?v=638307505952030000", tipo_cliente_id: 1, color: "Blanco", talla: "M", stock: 11, descripcion: "Camisa formal entallada para ocasiones importantes." },

    { id: 37, nombre: "Traje Ejecutivo", precio: "999.00", imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPhMFt8ZMRvJWqrKeqKeoNP-Zl4runqfZCuQ&s", tipo_cliente_id: 1, color: "Negro", talla: "S", stock: 5, descripcion: "Traje ejecutivo negro, ideal para reuniones de negocios." },
    { id: 38, nombre: "Traje Ejecutivo", precio: "999.00", imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPhMFt8ZMRvJWqrKeqKeoNP-Zl4runqfZCuQ&s", tipo_cliente_id: 1, color: "Negro", talla: "M", stock: 7, descripcion: "Traje ejecutivo negro, ideal para reuniones de negocios." },
  
    { id: 39, nombre: "Camisa Casual Estampada", precio: "129.00", imagen: "https://www.devre.la/media/catalog/product/d/e/devre-camisa-sport_42d000333-001_002.jpg", tipo_cliente_id: 1, color: "Azul Marino", talla: "S", stock: 10, descripcion: "Camisa casual estampada, perfecta para fines de semana." },
    { id: 40, nombre: "Camisa Casual Estampada", precio: "129.00", imagen: "https://www.devre.la/media/catalog/product/d/e/devre-camisa-sport_42d000333-001_002.jpg", tipo_cliente_id: 1, color: "Azul Marino", talla: "M", stock: 12, descripcion: "Camisa casual estampada, perfecta para fines de semana." },
  
    { id: 41, nombre: "Falda Midi con Bolsillos", precio: "159.00", imagen: "https://ae-pic-a1.aliexpress-media.com/kf/HTB1R_trMpXXXXXqapXXq6xXFXXXu/Falda-de-sat-n-con-bolsillos-para-adultos-Falda-Midi-gruesa-con-cremallera-A-la-medida.jpg_640x640Q90.jpg_.webp", tipo_cliente_id: 2, color: "Mostaza", talla: "S", stock: 8, descripcion: "Falda midi con bolsillos, perfecta para looks casuales." },
    { id: 42, nombre: "Falda Midi con Bolsillos", precio: "159.00", imagen: "https://ae-pic-a1.aliexpress-media.com/kf/HTB1R_trMpXXXXXqapXXq6xXFXXXu/Falda-de-sat-n-con-bolsillos-para-adultos-Falda-Midi-gruesa-con-cremallera-A-la-medida.jpg_640x640Q90.jpg_.webp", tipo_cliente_id: 2, color: "Mostaza", talla: "M", stock: 10, descripcion: "Falda midi con bolsillos, perfecta para looks casuales." },
  
    { id: 43, nombre: "Zapatos de Senderismo", precio: "329.00", imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2FkZOiEiKIuqwPsf4KAoWlLJq_qGH4J52Ag&s", tipo_cliente_id: 1, color: "Marrón Oscuro", talla: "36", stock: 6, descripcion: "Zapatos de senderismo resistentes para actividades al aire libre." },
    { id: 44, nombre: "Zapatos de Senderismo", precio: "329.00", imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2FkZOiEiKIuqwPsf4KAoWlLJq_qGH4J52Ag&s", tipo_cliente_id: 1, color: "Marrón Oscuro", talla: "41", stock: 8, descripcion: "Zapatos de senderismo resistentes para actividades al aire libre." },
  
    { id: 45, nombre: "Perfume Dulce y Frutal", precio: "459.00", imagen: "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaPE/119524270_01/w=800,h=800,fit=pad", tipo_cliente_id: 2, color: "N/A", talla: "N/A", stock: 18, descripcion: "Perfume dulce y frutal, ideal para mujeres dinámicas." },
    { id: 46, nombre: "Perfume Cítrico Refrescante", precio: "399.00", imagen: "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaPE/117524870_01/w=800,h=800,fit=pad", tipo_cliente_id: 1, color: "N/A", talla: "N/A", stock: 12, descripcion: "Perfume cítrico con un aroma fresco, ideal para uso diario." },
  
    { id: 47, nombre: "Mochila para Viajes", precio: "399.00", imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0U3aQFemX3M8179-FlxES80D2nxJVBJ09pw&s", tipo_cliente_id: 1, color: "Negro", talla: "N/A", stock: 15, descripcion: "Mochila de gran capacidad para viajes largos." },
    { id: 48, nombre: "Bolso de Hombro Casual", precio: "279.00", imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS32mkGQ0W2TUBunTz7S9Kn7ECcEu5w6FQvhQ&s", tipo_cliente_id: 2, color: "Beige", talla: "N/A", stock: 10, descripcion: "Bolso de hombro casual, perfecto para el día a día." },
  
    { id: 49, nombre: "Sudadera Oversized", precio: "149.00", imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSviqMF4rG8dewVerMJ7d4lwLFM5O3Ggse37g&s", tipo_cliente_id: 1, color: "Gris Oscuro", talla: "S", stock: 14, descripcion: "Sudadera oversized gris, cómoda y moderna." },
    { id: 50, nombre: "Sudadera Oversized", precio: "149.00", imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSviqMF4rG8dewVerMJ7d4lwLFM5O3Ggse37g&s", tipo_cliente_id: 1, color: "Gris Oscuro", talla: "M", stock: 12, descripcion: "Sudadera oversized gris, cómoda y moderna." }
  ];
 


const BuscarScreen = () => {
    return(
        <div>
            <Headers></Headers>

            <TablaProductos productos={productos}  />
            <Footer></Footer>
        </div>
    )
}

export default BuscarScreen;
