import React from 'react'
import Navbar from '../asset/navbar'
import AdService from './adService'
import HeaderService from './headerService'
import StartService from './startService'
import Footer from '../asset/footer'

function Service() {
    return (
        <>
            <Navbar />

            <div class="main-wrapper ">
                <HeaderService />
                <StartService />
                <AdService />
                <Footer />
            </div>
        </>
    )
}

export default Service