import React from 'react'
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

const Home = () => {
    return (
        <div className="relative">
            <div className="fixed right-4 bottom-2 z-20">
                <PopUpButton></PopUpButton>
            </div>
            <div className="bg-white">
                <WrapperContainer navHead>
                    <Navbar />
                    <Header />
                </WrapperContainer>
            </div>
            <div className="bg-gray-100 w-full">
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
        </div>
    )
}

export default Home
