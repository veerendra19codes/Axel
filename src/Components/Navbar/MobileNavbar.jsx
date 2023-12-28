import React, { useState, createContext, useContext } from 'react'
import logo from "../../assets/images/logo.svg"
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-scroll"
import { navbarData } from "../../DataforPage/dummyData"
import { ThemeContext } from '../../App'

export const NavbarContext = createContext(null);

const MobileNavbar = () => {
    const [open, setOpen] = useState(false);
    console.log(open);

    const { theme, toggleTheme } = useContext(ThemeContext)

    return (
        <div className={theme === "light" ? "w-full h-100vh flex flex-col justify-between p-0 m-0 gap-0 z-20" : "w-full h-100vh flex flex-col justify-between p-0 m-0 bg-dark gap-0 z-20"} >
            <div className="w-full h-16 flex flex-row justify-between p-4">
                <div>
                    <img className="h-10 sm:h-8 mr-[280px] sm:m-0" src={logo} alt="logo-img"></img>
                </div>

                <div className={theme === "light" ? "text-dark" : "text-white"}>
                    {open ? <IoCloseSharp size={24} onClick={() => setOpen(!open)} /> : <AiOutlineMenu size={24} onClick={() => setOpen(!open)} />}
                </div>
            </div>
            {open ?
                <div className="links flex flex-col justify-start items-center gap-4 pb-4">
                    {navbarData.map((item) => {
                        return (

                            <div key={item.id}>
                                <Link
                                    to={item.link}
                                    spy={true}
                                    smooth={true}
                                    hashSpy={true}
                                    offset={50}
                                    duration={500}
                                    isDynamic={true}
                                    ignoreCancelEvents={false}
                                    spyThrottle={500}
                                    onClick={() => setOpen(!open)}
                                    className={theme === "light" ? "cursor-pointer text-dark font-inter text-lg font-medium tracking-tight py-1 px-2 hover:text-blue-500" : "cursor-pointer text-white font-inter text-lg font-medium tracking-tight py-1 px-2 hover:text-blue-500"} >
                                    {item.name}
                                </Link>
                            </div>
                        )
                    })}
                </div>
                : ""}
        </div >
    )
}

export default MobileNavbar
