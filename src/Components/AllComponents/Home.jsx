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

const Home = () => {
    return (
        <div>
            <WrapperContainer navHead>
                <Navbar />
                <Header />
            </WrapperContainer>
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
    )
}

export default Home
