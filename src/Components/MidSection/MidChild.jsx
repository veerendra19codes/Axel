import React, { useContext } from 'react'
import { motion } from "framer-motion"
import { ThemeContext } from '../../App'


const MidChild = ({ data, click }) => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <div className="">
            <div>
                {data.map((item) => {
                    return (
                        <motion.div key={item.id} className="relative flex flex-col z-10"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ y: click ? 20 : 0, x: click ? 20 : 0, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ type: "spring", duration: 1.5 }}
                        >
                            <div className="w-[500px]">
                                <h3 className={theme === "light" ? "text-5xl font-bold font-inter no-underline align-middle tracking-wide normal-case leading-none text-dark pb-4" : "text-5xl font-bold font-inter no-underline align-middle tracking-wide normal-case leading-none text-white pb-4"} >{item.title}</h3>
                            </div>
                            {/* <div className="flex flex-row justify-between items-center w-full"> */}
                            <div>
                                <p className={theme === "light" ? "text-2xl font-normal font-inter no-underline align-middle tracking-wide normal-case leading-none text-dark" : "text-2xl font-normal font-inter no-underline align-middle tracking-wide normal-case leading-none text-white"} >{item.text}</p>
                            </div>
                            <div className="relative right-0 z-10">
                                <motion.img
                                    className="w-full"
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    animate={{ y: click ? 20 : 0, x: click ? 20 : 0, opacity: 1 }}
                                    exit={{ scale: 0.8, opacity: 0 }}
                                    transition={{ type: "spring", duration: 1.5 }}
                                    src={item.img} alt={item.title}></motion.img>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    )
}

export default MidChild
