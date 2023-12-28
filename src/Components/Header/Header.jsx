import React, { useContext } from 'react'
import header1 from "../../assets/images/headerImage.png"
import { Switch } from "@material-tailwind/react";
import { ThemeContext } from '../../App.js';

const Header = () => {

    const { theme, toggleTheme } = useContext(ThemeContext);

    console.log(theme);

    return (
        <div className={theme === "light" ? "mx-auto pt-12 w-full sm:p-0" : "w-full mx-auto pt-12 bg-dark sm:p-0"} >
            <div className="grid grid-cols-2 justify-items-left items-center sm:flex sm:flex-col">
                {/* left start  */}
                <div className="sm:w-full sm:p-4 w-4/5 pl-24 mt-20 sm:mt-8 justify-self-start">
                    <div className="ml-24 p-0 sm:ml-16">
                        <Switch
                            label={theme === "light" ? "Switch to dark" : "Switch to light"}
                            defaultChecked={theme === "light" ? false : true}
                            onClick={toggleTheme}
                        />
                    </div>
                    <h1 className={theme === "light" ? "text-5xl pl-24 font-russonOne font-medium no-underline align-middle text-left tracking-wide normal-case leading-normal text-dark sm:text-3xl sm:p-4" : "text-5xl pl-24 font-russonOne font-medium no-underline align-middle text-left tracking-wide normal-case leading-normal text-white sm:text-3xl sm:p-4"} >
                        Axel Brand New {" "}
                        <span className={theme === "light" ? "text-dark text-6xl font-petitFormal font-bold sm:text-3xl" : "text-white text-6xl font-petitFormal font-bold sm:text-3xl"} >
                            Furniture
                        </span>
                        {" "}
                        Application
                    </h1>
                    <div className="mt-4 sm:mt-0 pl-24 sm:p-4 text-left">
                        <p className={theme === "light" ? "w-4/5 sm:w-full font-inter font-medium no-underline align-middle tracking-wide normal-case text-dark sm:text-left" : "w-4/5 sm:w-full font-inter font-medium no-underline align-middle tracking-wide normal-case text-white"} >
                            Giving your home a proper makeover never was this easy. Modern
                            and stylish furniture for decent prices.Take a look what we offer
                            with simple button click.
                        </p>
                    </div>
                    <div className="pb-20">
                        <button className="pushable mt-8 ml-[100px] sm:ml-[90px] sm:mr-0">
                            <span className="front">Start now</span>
                        </button>
                    </div>
                </div>
                {/* left end  */}

                {/* right */}
                <div className="mt-4 sm:mt-0 align-middle justify-self-center">
                    <div>
                        <h2 className={theme === "light" ? "text-5xl pb-4  font-russonOne font-medium no-underline align-middle tracking-wide normal-case leading-normal text-dark sm:text-3xl" : "text-5xl pb-4  font-russonOne font-medium no-underline align-middle tracking-wide normal-case leading-normal text-white sm:text-3xl"} >
                            Modern Design
                        </h2>
                    </div>
                    <img
                        className="h-[400px] sm:h-[250px]  bg-no-repeat bg-center align-middle justify-center relative z-10 header rounder-xl"
                        src={header1}
                        alt="header-phone"
                    ></img>
                </div>
            </div>
        </div >
    )
}

export default Header
