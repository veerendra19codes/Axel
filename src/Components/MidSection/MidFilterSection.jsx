import React, { useState, useEffect, useContext } from 'react'
import MidButton from './MidButton'
import { sliderData } from '../../DataforPage/dummyData';
import MidChild from './MidChild';
import { motion } from "framer-motion"
import { ThemeContext } from '../../App'


const MidFilterSection = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);


    const buttons = [
        {
            id: "1",
            name: "Room1"
        },
        {
            id: "2",
            name: "Room2"
        },
        {
            id: "3",
            name: "Room3"
        }
    ];

    const [selected, setSelected] = useState("1");
    const [click, setClick] = useState(false);
    const [data, setData] = useState([]);

    const filterData = (button) => {
        const filter = sliderData.filter((item) => item.id === button);
        setData(filter);
        setSelected(button);
        setClick(true);
    }

    useEffect(() => {
        //initial data in slider
        const putData = (data) => {
            setData(data.filter((item) => item.id === "1"));
        };
        putData(sliderData);
    }, []);

    return (
        <div className=" h-[800px] min-[800px] max-[800px] mt-60 pt-0 pb-8">
            <div className=" h-full min-[800px] max-[800px] mt-4 pt-0 pb-8 mx-auto px-4 w-full" id="news">

                <div className="h-[850px] grid grid-cols-2 sm:flex sm:flex-col justify-items-center items-center">
                    <motion.div className="w-4/5 mx-auto pl-24 sm:w-full sm:p-4"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        variants={{ visible: { opacity: 1, scale: 1 }, hidden: { opacity: 0, scale: 0 } }}
                    >
                        <h2 className={theme === "light" ? "w-96 sm:w-full text-6xl font-bold font-inter no-underline align-middle tracking-wide normal-case leading-none text-dark sm:text-3xl" : "w-96 text-6xl font-bold font-inter no-underline align-middle tracking-wide normal-case leading-none text-white sm:w-full sm:text-3xl"} >
                            Check out some of the news
                        </h2>
                        <div className="mr-20">
                            <MidButton className="mt-20 sm:mr-0" buttons={buttons} filter={filterData} selected={selected}></MidButton>
                        </div>
                    </motion.div>
                    <div className="ml-20  pb-4  relative mx-auto w-8/12 sm:w-full rounded-xl drop-shadow-2xl sm:p-0 sm:m-0">
                        <MidChild data={data} click={click}></MidChild>
                    </div>
                </div>

            </div >
        </div >
    )
}

export default MidFilterSection
