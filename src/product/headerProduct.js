import React from 'react'
import { Link } from 'react-router-dom'

function HeaderProduct() {
    return (
        <section class="page-title bg-1">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="block text-center">
                            <h1 class="text-capitalize mb-4 text-lg">Portfolio</h1>
                            <ul class="list-inline">
                                <li class="list-inline-item"><Link to="/" class="text-white">Home</Link></li>
                                <li class="list-inline-item"><span class="text-white">/</span></li>
                                <li class="list-inline-item"><Link to="/product" class="text-white-50">Our Products</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeaderProduct