import React from 'react'
import header1 from "../../assets/images/headerImage.png"
import { Switch } from "@material-tailwind/react";

const Header = () => {
    return (
        <div className="mx-auto pt-12">
            <div className="grid grid-cols-2 justify-items-left items-center">
                {/* left start  */}
                <div className="w-4/5 pl-24 mt-20 justify-self-start">
                    <Switch defaultChecked />;
                    <h1 className="text-5xl pl-24 font-russonOne font-medium no-underline align-middle text-left tracking-wide normal-case leading-normal text-dark">
                        Axel Brand New {" "}
                        <span className="text-dark text-6xl font-petitFormal font-bold">
                            Furniture
                        </span>
                        {" "}
                        Application
                    </h1>
                    <div className="mt-4 pl-24 text-left">
                        <p className="w-4/5 font-inter font-medium no-underline align-middle tracking-wide normal-case text-dark">
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
        </div>
    )
}

export default Header
