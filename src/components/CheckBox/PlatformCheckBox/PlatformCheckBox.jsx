import { useEffect, useState } from "react";

const PlatformCheckBox = ({searchByGenre}) =>  {
    const [platforms, setPlatforms] = useState([]);
    
        /**
         * Function to get all platforms of movies
         */
        const fetchPlatforms = async () => {
            try {
                const response = await fetch(`http://localhost:3000/platforms`);
                const data = await response.json();
                setPlatforms(data);
            } catch (error) {
                console.error("Error to get the platforms:", error);
            }
        };
    
        useEffect(() => {
            fetchPlatforms();
        }, []);
    
        return (
            <div className="category-checkbox-container">
                <h3>Filter Platform</h3>
                { (
                    <div className="category-checkbox-list">
                        {platforms.map((category) => (
                            <div key={category.id} className="category-checkbox-item">
                                <input type="checkbox" id={`genre-${category.id}`} name={category.name}/>
                                <label htmlFor={`genre-${category.id}`}>{category.name}</label>
                                
                                
                            </div>
                        ))}
                    </div>
                )}
            </div>
        );

}
export default PlatformCheckBox;