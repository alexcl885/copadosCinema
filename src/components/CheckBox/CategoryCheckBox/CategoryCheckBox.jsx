import { useEffect, useState } from "react";
import "./CategoryCheckBox.css"; // Importamos los estilos

const CategoryCheckBox = ({ searchByGenre }) => {
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);

    /**
     * Function to get all categories of movies
     */
    const fetchCategories = async () => {
        try {
            const response = await fetch(`http://localhost:3000/genres`);
            const data = await response.json();
            setCategories(data);
        } catch (error) {
            console.error("Error to get the categories:", error);
        }
    };

    useEffect(() => {
        fetchCategories();
    }, []);

    const handleCategoryChange = (categoryId) => {
        if (selectedCategory === categoryId) {
            setSelectedCategory(null);
            searchByGenre(null); // Muestra todas las películas
        } else {
            setSelectedCategory(categoryId);
            searchByGenre(categoryId);
        }
    };

    return (
        <div className="category-checkbox-container">
            <h3>Filter Category</h3>
            <div className="category-checkbox-list">
                {categories.map((category) => (
                    <div key={category.id} className="category-checkbox-item">
                        <input
                            type="radio"
                            id={category.id}
                            name="category" // Todos los radios comparten el mismo nombre
                            checked={selectedCategory === category.id}
                            onChange={() => handleCategoryChange(category.id)}
                        />
                        <label htmlFor={category.id}>{category.name}</label>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CategoryCheckBox;
