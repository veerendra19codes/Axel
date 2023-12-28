import React, { useContext } from 'react'
import { FooterData1 } from '../../DataforPage/dummyData'
import { FooterData2 } from '../../DataforPage/dummyData'
import { FooterData3 } from '../../DataforPage/dummyData'
import logo from "../../assets/images/logo.svg"
import googlePlay from "../../assets/images/google-play.svg"
import appleStore from "../../assets/images/apple-store.svg"
import { ThemeContext } from '../../App'

const Footer = () => {
    const { theme, toggleTheme } = useContext(ThemeContext)
    const year = new Date().getFullYear();

    return (
        <div className="mt-12">
            <div className="grid grid-cols-4 sm:grid-cols-2 gap-8 sm:gap-0 items-center justify-items-center">

                <div className="h-64 mx-auto pl-24 sm:px-4">
                    <div>
                        <img className="h-10 cursor-pointer" src={logo} alt="logo"></img>
                    </div>
                    <div className="mt-5">
                        <img
                            className="h-8 cursor-pointer"
                            src={appleStore}
                            alt="apple-store"
                        ></img>
                    </div>
                    <div className="mt-5">
                        <img
                            className="h-8 cursor-pointer"
                            src={googlePlay}
                            alt="apple-store"
                        ></img>
                    </div>
                </div>

                <div className="h-64 sm:-ml-12">
                    <h3 className={theme === "light" ? "flex justify-start text-dark font-inter font-medium text-lg no-underline align-middle tracking-wide normal-case" : "flex justify-start text-white font-inter font-medium text-lg no-underline align-middle tracking-wide normal-case"}>
                        Features
                    </h3>
                    {FooterData1.map((item) => {
                        return (
                            <div key={item.id}>
                                <p className={theme === "light" ? "flex justify-start text-dark font-inter text-md font-normal cursor-pointer no-underline align-middle tracking-wide normal-case" : "flex justify-start text-gray-500 font-inter text-md font-normal cursor-pointer no-underline align-middle tracking-wide normal-case"} >{item.text}</p>
                            </div>
                        )
                    })}
                </div>

                <div className="h-64 sm:px-2">
                    <h3 className={theme === "light" ? "flex justify-start text-dark font-inter font-medium text-lg no-underline align-middle tracking-wide normal-case" : "flex justify-start text-white font-inter font-medium text-lg no-underline align-middle tracking-wide normal-case"}>
                        Features
                    </h3>
                    {FooterData2.map((item) => {
                        return (
                            <div key={item.id}>
                                <p className={theme === "light" ? "flex justify-start text-dark font-inter text-md font-normal cursor-pointer no-underline align-middle tracking-wide normal-case" : "flex justify-start text-gray-500 font-inter text-md font-normal cursor-pointer no-underline align-middle tracking-wide normal-case"}>{item.text}</p>
                            </div>
                        )
                    })}
                </div>

                <div className="h-64 sm:px-2">
                    <h3 className={theme === "light" ? "flex justify-start text-dark font-inter font-medium text-lg no-underline align-middle tracking-wide normal-case" : "flex justify-start text-white font-inter font-medium text-lg no-underline align-middle tracking-wide normal-case"}>
                        Features
                    </h3>
                    {FooterData3.map((item) => {
                        return (
                            <div key={item.id}>
                                <p className={theme === "light" ? "flex justify-start text-dark font-inter text-md font-normal cursor-pointer no-underline align-middle tracking-wide normal-case" : "flex justify-start text-gray-500 font-inter text-md font-normal cursor-pointer no-underline align-middle tracking-wide normal-case"}>{item.text}</p>
                            </div>
                        )
                    })}
                </div>

            </div>

            <div className="flex items-center justify-center">
                <hr className="h-px w-4/5 bg-gray-400 opacity-100 outline-none border-none" />
            </div>
            <div className="flex justify-around items-center py-6">
                <div>
                    <p className={theme === "light" ? "text-dark pb-2 font-inter font-medium cursor-pointer no-underline align-middle tracking-wide normal-case sm:p-0" : "text-white pb-2 font-inter font-medium cursor-pointer no-underline align-middle tracking-wide normal-case sm:p-0"} >Axel</p>
                </div>
                <div>
                    <p className={theme === "light" ? "text-dark pb-2 font-inter font-light cursor-pointer no-underline align-middle tracking-wide normal-case sm:text-xs sm:p-0" : "text-gray-200 pb-2 font-inter font-light cursor-pointer no-underline align-middle tracking-wide normal-case sm:text-xs sm:p-0"}>
                        Copyright {year} page by Veerendra Gumate
                    </p>
                </div>
            </div>

        </div>
    )
}

export default Footer
