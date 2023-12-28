import React, { useContext } from 'react'
import { room } from '../../DataforPage/dummyData'
import { motion } from "framer-motion"
import { ThemeContext } from '../../App'


const MidComponentItem = ({ title, img, text, reverse }) => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <div className="pb-32 sm:pb-6" id="company">
            {reverse ? (
                <div className="grid grid-cols-2 jutify-items-center items-center sm:flex sm:flex-col">
                    <motion.div className="w-4/5 pl-48 sm:w-full sm:p-4"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        variants={{ visible: { opacity: 1, scale: 1 }, hidden: { opacity: 0, scale: 0 } }}>
                        <h2 className={theme === "light" ? "text-6xl pt-10 sm:pt-0  pb-4  sm:pb-0 font-bold font-inter no-underline align-midd;e tracking-wide normal-case leading-none text-dark text-start sm:text-2xl" : "text-6xl pt-10 sm:pt-0 pb-4 sm:pb-0 font-bold font-inter no-underline align-midd;e tracking-wide normal-case leading-none text-white text-start sm:text-2xl"} >
                            {title}
                        </h2>
                        <p className={theme === "light" ? "text-2xl w-full pb-4 font-normal font-inter no-underline align-midd;e tracking-wide normal-case leading-none text-dark text-start sm:text-lg" : "text-2xl w-full pb-4 font-normal font-inter no-underline align-middle tracking-wide normal-case leading-none text-white text-start sm:text-lg"} >
                            {text}
                        </p>
                        <button className="pushable mt-4 sm:ml-[80px]">
                            <span className="front">
                                Start now
                            </span>
                        </button>
                    </motion.div>

                    <div className="ml-[300px] sm:ml-0">
                        <motion.img className="h-[600px] sm:h-[400px] sm:hidden pt-10 hover:rotate-6 duration-1000 cursor-pointer"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                            variants={{ visible: { opacity: 1, scale: 1 }, hidden: { opacity: 0, scale: 0 } }}
                            src={img}
                            alt="phone1">
                        </motion.img>
                    </div>
                </div>
            ) : (
                <div
                    id="room"
                    className="flex flex-row-reverse sm:flex-col-reverse justify-around items-center w-full sm:p-4">
                    <div>
                        <h2 className={theme === "light" ? "text-6xl pt-10 pb-4 font-bold font-inter no-underline align-middle tracking-wide normal-case leading-none text-dark sm:text-3xl" : "text-6xl pt-10 pb-4 font-bold font-inter no-underline align-middle tracking-wide normal-case leading-none text-white sm:text-3xl"}>
                            {title}
                        </h2>

                        <div className="flex flex-col items-start content-center">
                            {room.map((item) => {
                                return (
                                    <div className="flex items-center content-center py-2 sm:p-1 sm:py-2" key={item.id}>
                                        <div className="mr-4 sm:mr-0">
                                            <img
                                                className="w-16 h-16 sm:h-8 sm:w-8"
                                                src={item.img}
                                                alt={item.name}
                                            ></img>
                                        </div>
                                        <p className={theme === "light" ? "text-2xl w-full pb-4 sm:pb-2 font-normal font-inter no-underline align-middle tracking-wide normal-case leading-none text-dark content-center self-center sm:text-base sm:pl-4" : "text-2xl w-full pb-4 font-normal font-inter no-underline align-middle tracking-wide normal-case leading-none text-white content-center self-center sm:text-base sm:pb-2 sm:pl-4"} >{item.name}</p>
                                    </div>

                                )
                            })}
                        </div>
                    </div>

                    <div>
                        <img className="h-[600px] sm:h-[200px] pt-4 sm:pt-0 pl-12 sm:pl-0 hover:rotate-[-6deg] duration-1000 cursor-pointer" src={img} alt="phone"></img>
                    </div>
                </div>
            )
            }
        </div >
    )
}

export default MidComponentItem
