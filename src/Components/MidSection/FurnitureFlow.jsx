import React, { useContext } from 'react'
import flowLight from "../../assets/images/flow-light.png"
import flowDark from "../../assets/images/flow-dark.png"
import { ThemeContext } from '../../App'


const FurnitureFlow = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <div>
            <img className="bg-center bg-no-repeat bg-cover" src={theme === "light" ? flowLight : flowDark} alt=" Furniture Flow"></img>
        </div >
    )
}

export default FurnitureFlow
