import React, { useContext } from 'react'
import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
} from "@material-tailwind/react";
import { tabsData } from '../../DataforPage/dummyData';
import { ThemeContext } from '../../App'


const TabsComponent = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <div id="features" className="pb-16 sm:p-0">
            <Tabs
                value="bedroom"
                id="custom-animation"
                className="grid grid-cols-2 sm:flex sm:flex-col justify-items-center items-center content-between w-full sm:p-4"
            >
                <div className="w-4/5 pl-24 sm:w-full sm:p-0">
                    <h1 className={theme === "light" ? "text-6xl pt-10 pb-4 sm:pb-0 font-bold font-inter no-underline text-start tracking-wide normal-case leading-none text-dark sm:text-3xl" : "text-6xl pt-10 pb-4 sm:pb-0 font-bold font-inter no-underline text-start tracking-wide normal-case leading-none text-white sm:text-3xl"} >
                        Features
                    </h1>
                    <p className={theme === "light" ? "text-2xl pb-16 sm:pb-4 font-normal font-inter no-underline align-left text-start tracking-wide normal-case leading-none text-dark sm:text-lg" : "text-2xl pb-16 sm:pb-4 font-normal font-inter no-underline align-left text-start tracking-wide normal-case leading-none text-white sm:text-lg"} >
                        Axel offers many great features.
                        You can create your own room,
                        request a service,buy modern furniture,
                        sell a furniture and so much more.
                        Take a sneak peak at each of them.
                    </p>
                    <TabsHeader className={theme === "light" ? "flex justify-center items-center content-center bg-gray-100 sm:w-[full]" : "flex justify-center items-center content-center bg-gray-500 sm:w-[full]"} >
                        {tabsData.map(({ label, value }) => (
                            <Tab className="" key={value} value={value}>
                                <p className={theme === "light" ? "text-royalBlue font-inter leading-normal no-underline tracking-wide normal-case leading-none sm:text-[9px]" : "text-dark font-inter leading-normal no-underline tracking-wide normal-case leading-none sm:text-[9px]"} >
                                    {label}
                                </p>
                            </Tab>
                        ))}
                    </TabsHeader>
                    <TabsBody
                        animate={{
                            mount: { y: 0 },
                            unmount: { y: 250 },
                        }}
                    >
                        {tabsData.map(({ value, desc, linkText }) => (
                            <TabPanel key={value} value={value} className="text-start">
                                <p className={theme === "light" ? "text-2xl pb-4 sm:pb-0 font-normal font-inter no-underline text-start tracking-wide normal-case leading-none text-dark -ml-4 sm:text-lg sm:-ml-4" : "text-2xl pb-4 font-normal font-inter no-underline text-start tracking-wide normal-case leading-none text-white -ml-4 sm:-ml-4 sm:pb-0 sm:text-lg"} >
                                    {desc}
                                </p>
                                <span className={theme === "light" ? "text-royalBlue font-inter leading-normal no-underline -ml-4 tracking-wide normal-case relative cursor-pointer hover:animate-pulse sm:text-sm" : "text-blue-400 font-inter leading-normal no-underline -ml-4 tracking-wide normal-case relative cursor-pointer hover:animate-pulse sm:text-sm"} >
                                    {linkText}
                                </span>
                            </TabPanel>
                        ))}
                    </TabsBody>
                </div>
                <div>
                    <TabsBody
                        animate={{
                            mount: { y: 0 },
                            unmount: { y: 250 },
                        }}
                        className="pt-24 sm:p-0"
                    >
                        {tabsData.map(({ value, img }) => (
                            <TabPanel key={value} value={value}>
                                <img className="w-[460px]" src={img} alt="phone"></img>
                            </TabPanel>
                        ))}
                    </TabsBody>
                </div>
            </Tabs >
        </div >
    )
}

export default TabsComponent
