import { useState } from "react";
import CategoryCheckBox from "./CategoryCheckBox/CategoryCheckBox";

const CheckBoxMain = () => {
    const [showFilterCategory, setShowFilterCategory] = useState(false);

    return (
        <>
            <input type="button" value="Filtrar por Categoría" onClick={() => setShowFilterCategory(!showFilterCategory)} />
            <input type="button" value="Filtrar por Plataforma" />

            {showFilterCategory && <CategoryCheckBox />}
        </>
    );
};

export default CheckBoxMain;
