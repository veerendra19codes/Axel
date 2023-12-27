import React, { useContext } from 'react'
import header1 from "../../assets/images/headerImage.png"
import { Switch } from "@material-tailwind/react";
import { ThemeContext } from '../../App.js';

const Header = () => {

    const { theme, toggleTheme } = useContext(ThemeContext);

    console.log(theme);

    return (
        <div className={theme === "light" ? "mx-auto pt-12 w-full" : "w-full mx-auto pt-12 bg-dark"} >
            <div className="grid grid-cols-2 justify-items-left items-center">
                {/* left start  */}
                <div className="w-4/5 pl-24 mt-20 justify-self-start">
                    <Switch
                        label={theme === "light" ? "Switch to dark" : "Switch to light"}
                        defaultChecked={theme === "light" ? false : true}
                        onClick={toggleTheme}
                    />
                    <h1 className={theme === "light" ? "text-5xl pl-24 font-russonOne font-medium no-underline align-middle text-left tracking-wide normal-case leading-normal text-dark" : "text-5xl pl-24 font-russonOne font-medium no-underline align-middle text-left tracking-wide normal-case leading-normal text-white"} >
                        Axel Brand New {" "}
                        <span className={theme === "light" ? "text-dark text-6xl font-petitFormal font-bold" : "text-white text-6xl font-petitFormal font-bold"} >
                            Furniture
                        </span>
                        {" "}
                        Application
                    </h1>
                    <div className="mt-4 pl-24 text-left">
                        <p className={theme === "light" ? "w-4/5 font-inter font-medium no-underline align-middle tracking-wide normal-case text-dark" : "w-4/5 font-inter font-medium no-underline align-middle tracking-wide normal-case text-white"} >
                            Giving your home a proper makeover never was this easy. Modern
                            and stylish furniture for decent prices.Take a look what we offer
                            with simple button click.
                        </p>
                    </div>
                    <div className="pb-20">
                        <button className="pushable mt-8 mr-[130px]">
                            <span className="front">Start now</span>
                        </button>
                    </div>
                </div>
                {/* left end  */}

                {/* right */}
                <div className="mt-4 align-middle justify-self-center">
                    <div>
                        <h2 className="text-5xl pb-4  font-russonOne font-medium no-underline align-middle tracking-wide normal-case leading-normal text-dark">
                            Modern Design
                        </h2>
                    </div>
                    <img
                        className="h-[400px]  bg-no-repeat bg-center align-middle justify-center relative z-10 header rounder-xl"
                        src={header1}
                        alt="header-phone"
                    ></img>
                </div>
            </div>
        </div >
    )
}

export default Header
