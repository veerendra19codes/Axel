import React, { useContext } from 'react'
import { ThemeContext } from '../../App'

const WrapperContainer = ({ navHead, children }) => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <div
            className={
                !navHead
                    ? `h-full ${theme === "light" ? "bg-wrapperBg" : "bg-wrapperDark"} w-full bg-cover bg-no-repeat bg-center rounded-xl -translate-y-36 drop-shadow-2xl`
                    : "w-full h-full mx-auto"
            }
        >
            {children}
        </div>
    )
}

export default WrapperContainer
