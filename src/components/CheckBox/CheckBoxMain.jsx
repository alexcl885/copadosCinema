import { useState } from "react";
import CategoryCheckBox from "./CategoryCheckBox/CategoryCheckBox";
import PlatformCheckBox from "./PlatformCheckBox/PlatformCheckBox";
import "./CheckBoxMain.css";

const CheckBoxMain = ({ searchByGenre, searchByPlatForm }) => {
    const [filters, setFilters] = useState({
        category: false,
        platform: false,
    });

    const toggleFilter = (filter) => {
        setFilters((prev) => ({ ...prev, [filter]: !prev[filter] }));
    };

    return (
        <div className="checkbox-container">
            <button onClick={() => toggleFilter("category")} className="checkbox-button">
                {filters.category ? "Hide Category" : "Filter Category"}
            </button>
            <button onClick={() => toggleFilter("platform")} className="checkbox-button">
                {filters.platform ? "Hide Platform" : "Filter Platform"}
            </button>

            <div className="filters-container">
                {filters.category && <CategoryCheckBox searchByGenre={searchByGenre} />}
                {filters.platform && <PlatformCheckBox searchByPlatForm={searchByPlatForm} />}
            </div>
        </div>
    );
};

export default CheckBoxMain;
