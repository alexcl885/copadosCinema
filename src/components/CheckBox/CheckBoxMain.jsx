import { useState } from "react";
import CategoryCheckBox from "./CategoryCheckBox/CategoryCheckBox";

const CheckBoxMain = () => {
    /**
     * This const is a state to show a category checkboxes
     */
    const [showFilterCategory, setFilterCategory] = useState(false)
    const changeFilterCategory = () => {
        setFilterCategory(!showFilterCategory)
    }
    return (
        <>
            <input type="button" value="Filter Category" onClick={changeFilterCategory}/>
            <input type="button" value="Filter Platform" />
            {showFilterCategory && <CategoryCheckBox></CategoryCheckBox>}
        </>
    )
}

export default CheckBoxMain;