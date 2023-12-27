import React, { useContext } from 'react'
import Navbar from '../Navbar/Navbar'
import Header from '../Header/Header'
import WrapperContainer from '../WrapperContainer/WrapperContainer'
import MidFilterSection from '../MidSection/MidFilterSection'
import MidComponentParent from '../MidSection/MidComponentParent'
import TabsComponent from '../MidSection/TabsComponent'
import FurnitureFlow from '../MidSection/FurnitureFlow'
import NewsLetter from "../../Components/MidSection/NewsLetter"
import Cards from '../MidSection/Cards'
import Footer from "../Footer/Footer";
import PopUpButton from '../PopUpButton/PopUpButton'
import { ThemeContext } from '../../App'

const Home = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <div className={theme === "light" ? "relative" : "relative bg-dark"} >
            <div className="fixed right-4 bottom-2 z-20">
                <PopUpButton></PopUpButton>
            </div>
            <div className="bg-white p-0 m-0 w-full">
                <WrapperContainer navHead>
                    <Navbar />
                    <Header />
                </WrapperContainer>
            </div>
            <div className={theme === "light" ? "bg-gray-100 w-full" : "bg-gray-900 w-full"} >
                <WrapperContainer>
                    <MidFilterSection />
                    <MidComponentParent />
                    <TabsComponent />
                    <FurnitureFlow />
                    <Cards />
                    <NewsLetter />
                </WrapperContainer>
                <div>
                    <Footer />
                </div>
            </div>
        </div >
    )
}

export default Home
