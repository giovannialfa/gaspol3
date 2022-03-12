import React from 'react'
import Footer from '../asset/footer'
import Navbar from '../asset/navbar'
import HeaderContact from './headerContact'
import MapContact from './mapContact'
import StartContact from './startContact'

function Contact() {
    return (
        <>
            <Navbar />

            <div class="main-wrapper ">
                <HeaderContact />
                <StartContact />
                <MapContact />
                <Footer />
            </div>
        </>
    )
}

export default Contact