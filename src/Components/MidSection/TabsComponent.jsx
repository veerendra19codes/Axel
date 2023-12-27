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
        <div id="features" className="pb-16">
            <Tabs
                value="bedroom"
                id="custom-animation"
                className="grid grid-cols-2 justify-items-center items-center content-between w-full"
            >
                <div className="w-4/5 pl-24">
                    <h1 className={theme === "light" ? "text-6xl pt-10 pb-4 font-bold font-inter no-underline text-start tracking-wide normal-case leading-none text-dark" : "text-6xl pt-10 pb-4 font-bold font-inter no-underline text-start tracking-wide normal-case leading-none text-white"} >
                        Features
                    </h1>
                    <p className={theme === "light" ? "text-2xl pb-16 font-normal font-inter no-underline align-left text-start tracking-wide normal-case leading-none text-dark" : "text-2xl pb-16 font-normal font-inter no-underline align-left text-start tracking-wide normal-case leading-none text-white"} >
                        Axel offers many great features.
                        You can create your own room,
                        request a service,buy modern furniture,
                        sell a furniture and so much more.
                        Take a sneak peak at each of them.
                    </p>
                    <TabsHeader className={theme === "light" ? "flex justify-center items-center content-center bg-gray-100" : "flex justify-center items-center content-center bg-gray-500"} >
                        {tabsData.map(({ label, value }) => (
                            <Tab className="" key={value} value={value}>
                                <p className={theme === "light" ? "text-royalBlue font-inter leading-normal no-underline tracking-wide normal-case leading-none" : "text-dark font-inter leading-normal no-underline tracking-wide normal-case leading-none"} >
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
                                <p className={theme === "light" ? "text-2xl pb-4 font-normal font-inter no-underline text-start tracking-wide normal-case leading-none text-dark -ml-4" : "text-2xl pb-4 font-normal font-inter no-underline text-start tracking-wide normal-case leading-none text-white -ml-4"} >
                                    {desc}
                                </p>
                                <span className={theme === "light" ? "text-royalBlue font-inter leading-normal no-underline -ml-4 tracking-wide normal-case relative cursor-pointer hover:animate-pulse" : "text-blue-400 font-inter leading-normal no-underline -ml-4 tracking-wide normal-case relative cursor-pointer hover:animate-pulse"} >
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
                        className="pt-24"
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
