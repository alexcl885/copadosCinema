import { useEffect, useState } from "react";
import "./CategoryCheckBox.css"; // Importamos los estilos

const CategoryCheckBox = () => {
    const [categories, setCategories] = useState([]);

    /**
     * Function to get all categories of movies
     */
    const fetchCategories = async () => {
        try {
            const response = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=d4aee571c84637243d4d7e749415d1e2`);
            const data = await response.json();
            setCategories(data.genres);
        } catch (error) {
            console.error("Error to get the categories:", error);
        }
    };

    useEffect(() => {
        fetchCategories();
    }, []);

    return (
        <div className="category-checkbox-container">
            <h3>Filter Category</h3>
            { (
                <div className="category-checkbox-list">
                    {categories.map((category) => (
                        <div key={category.id} className="category-checkbox-item">
                            <input type="checkbox" id={`genre-${category.id}`} name={category.name} />
                            <label htmlFor={`genre-${category.id}`}>{category.name}</label>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default CategoryCheckBox;