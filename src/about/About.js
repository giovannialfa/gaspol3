import React from 'react'
import Footer from '../asset/footer'
import Navbar from '../asset/navbar'
import HeaderAbout from './headerAbout'
import MisiAbout from './misiAbout'
import StartAbout from './startAbout'
import TeamAbout from './teamAbout'

function About() {
    return (
        <>
            <Navbar />
            <div className="main-wrapper " >
                <HeaderAbout />
                <StartAbout />
                <MisiAbout />
                <TeamAbout />
                <Footer />
            </div >
        </>
    )
}

export default About