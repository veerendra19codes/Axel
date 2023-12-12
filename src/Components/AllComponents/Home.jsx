import React from 'react'
import Navbar from '../Navbar/Navbar'
import Header from '../Header/Header'
import WrapperContainer from '../WrapperContainer/WrapperContainer'
import MidFilterSection from '../MidSection/MidFilterSection'
import MidComponentParent from '../MidSection/MidComponentParent'

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
            </WrapperContainer>
        </div>
    )
}

export default Home
