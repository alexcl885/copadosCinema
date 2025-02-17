import { useEffect, useState } from "react";

const PlatformCheckBox = ({ searchByPlatForm }) => {
    const [platforms, setPlatforms] = useState([]);
    const [selectedPlatform, setSelectedPlatform] = useState(null);

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

    const handlePlatformChange = (platformId) => {
        if (selectedPlatform === platformId) {
            setSelectedPlatform(null);
            searchByPlatForm(null); // Muestra todas las películas
        } else {
            setSelectedPlatform(platformId);
            searchByPlatForm(platformId);
        }
    };

    return (
        <div className="category-checkbox-container">
            <h3>Filter Platform</h3>
            <div className="category-checkbox-list">
                {platforms.map((platform) => (
                    <div key={platform.id} className="category-checkbox-item">
                        <input
                            type="radio"
                            id={`platform-${platform.id}`}
                            name="platform"
                            checked={selectedPlatform === platform.id}
                            onChange={() => handlePlatformChange(platform.id)}
                        />
                        <label htmlFor={`platform-${platform.id}`}>{platform.name}</label>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PlatformCheckBox;
