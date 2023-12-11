import React from 'react'
import Navbar from '../Navbar/Navbar'
import Header from '../Header/Header'
import WrapperContainer from '../WrapperContainer/WrapperContainer'
import MidFilterSection from '../MidSection/MidFilterSection'

const Home = () => {
    return (
        <div>
            <WrapperContainer navHead>
                <Navbar />
                <Header />
            </WrapperContainer>
            {/* <WrapperContainer> */}
            <MidFilterSection />
            {/* </WrapperContainer> */}
        </div>
    )
}

export default Home
