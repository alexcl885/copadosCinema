import { useState } from "react";
import CategoryCheckBox from "./CategoryCheckBox/CategoryCheckBox";
import PlatformCheckBox from "./PlatformCheckBox/PlatformCheckBox";
import "./CheckBoxMain.css"; 

const CheckBoxMain = ({ searchByGenre }) => {
    const [showFilterCategory, setFilterCategory] = useState(false);
    const [showFilterPlatform, setFilterPlatform] = useState(false);

    const changeFilterCategory = () => {
        setFilterCategory(!showFilterCategory);
    };

    const changeFilterPlatform = () => {
        setFilterPlatform(!showFilterPlatform);
    };

    return (
        <div className="checkbox-container">
            <input 
                type="button" 
                value="Filter Category" 
                onClick={changeFilterCategory} 
                className="checkbox-button"
            />
            <input 
                type="button" 
                value="Filter Platform" 
                onClick={changeFilterPlatform} 
                className="checkbox-button"
            />
            <div className="filters-container">
                {showFilterCategory && <CategoryCheckBox searchByGenre={searchByGenre} />}
                {showFilterPlatform && <PlatformCheckBox />}
            </div>
        </div>
    );
};

export default CheckBoxMain;
