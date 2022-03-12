import React from 'react'
import { Link } from 'react-router-dom'

function HeaderService() {
    return (<section class="page-title bg-1">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="block text-center">
                        <span class="text-white">Our services</span>
                        <h1 class="text-capitalize mb-4 text-lg">What We Do</h1>
                        <ul class="list-inline">
                            <li class="list-inline-item"><Link to="/" class="text-white">Home</Link></li>
                            <li class="list-inline-item"><span class="text-white">/</span></li>
                            <li class="list-inline-item"><Link to="/service" class="text-white-50">Our services</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default HeaderService