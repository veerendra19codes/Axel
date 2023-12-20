import React from 'react'
import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
} from "@material-tailwind/react";
import { tabsData } from '../../DataforPage/dummyData';

const TabsComponent = () => {
    return (
        <div id="features" className="pb-16">
            <Tabs
                value="bedroom"
                id="custom-animation"
                className="grid grid-cols-2 justify-items-center items-center content-between w-full"
            >
                <div className="w-4/5 pl-24">
                    <h1 className="text-6xl pt-10 pb-4 font-bold font-inter no-underline text-start tracking-wide normal-case leading-none text-dark">
                        Features
                    </h1>
                    <p className="text-2xl pb-16 font-normal font-inter no-underline align-left text-start tracking-wide normal-case leading-none text-dark">
                        Axel offers many great features.
                        You can create your own room,
                        request a service,buy modern furniture,
                        sell a furniture and so much more.
                        Take a sneak peak at each of them.
                    </p>
                    <TabsHeader className="flex justifyc-center items-center content-center bg-gray-100">
                        {tabsData.map(({ label, value }) => (
                            <Tab className="" key={value} value={value}>
                                <p className="text-royalBlue font-inter leading-normal no-underline tracking-wide normal-case leading-none
                            text-dark">
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
                                <p className="text-2xl pb-4 font-normal font-inter no-underline text-start tracking-wide normal-case leading-none text-dark -ml-4">
                                    {desc}
                                </p>
                                <span className="text-royalBlue font-inter leading-normal no-underline -ml-4 tracking-wide normal-case relative cursor-pointer hover:animate-pulse">
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
            </Tabs>
        </div>
    )
}

export default TabsComponent
