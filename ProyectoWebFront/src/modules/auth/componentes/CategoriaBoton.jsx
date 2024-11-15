import React, { useState } from "react";
import "../componentsstilos/CategoriaBoton.css";

const CategoriaBoton = ({ categories, subcategories }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (categoria) => {
    
    if (selectedCategory && selectedCategory.id === categoria.id) {
      setSelectedCategory(null);
    } else {
      setSelectedCategory(categoria);
    }
  };

  const obtenerSubcategorias = () => {
    if (!selectedCategory) return [];
    return subcategories.filter((subcategoria) => {
      const { categoryId } = subcategoria;
      if (Array.isArray(categoryId)) {
        return categoryId.includes(selectedCategory.id);
      }
      return categoryId === selectedCategory.id;
    });
  };

  const categoriasfiltradas = obtenerSubcategorias();

  return (
    <div className="category-container">
      <ul className="category-list">
        {categories.map((categoria) => (
          <li key={categoria.id} className="category-item">
            <button
              onClick={() => handleCategoryClick(categoria)}
              className={`category-btn ${
                selectedCategory && selectedCategory.id === categoria.id
                  ? "active"
                  : ""
              }`}
            >
              {categoria.name}
            </button>
            {selectedCategory && selectedCategory.id === categoria.id && (
              <ul className="subcategory-list">
                {categoriasfiltradas.map((subcategoria) => (
                  <li key={subcategoria.id} className="subcategory-item">
                    {subcategoria.name}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoriaBoton;