import React from 'react'
import Footer from '../asset/footer'
import Navbar from '../asset/navbar'
import IntroHome from './introHome'
import SectionAbout from './sectionAbout'
import SectionService from './sectionService'
import SliderHome from './sliderHome'
import WhyWe from './whyWe'

function Home() {
    return (
        <>
            <Navbar />

            <div className="main-wrapper ">
                <SliderHome />

                <IntroHome />

                <SectionAbout />
                <SectionService />
                <WhyWe />

                <br />
                <br />
                <br />

                <Footer />

            </div>
        </>
    )
}

export default Home