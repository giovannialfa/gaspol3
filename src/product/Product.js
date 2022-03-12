import React from 'react'
import Navbar from '../asset/navbar'
import Footer from '../asset/footer'
import HeaderProduct from './headerProduct'
import StartProduct from './startProduct'

function Product() {
    return (<>
        <Navbar />
        <div class="main-wrapper ">
            <HeaderProduct />
            <StartProduct />
            <Footer />
        </div>
    </>
    )
}

export default Product