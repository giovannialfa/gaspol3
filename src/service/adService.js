import React from 'react'
import { Link } from 'react-router-dom'

function AdService() {
    return (
        <section class="cta-2">
            <div class="container">
                <div class="cta-block p-5 rounded">
                    <div class="row justify-content-center align-items-center ">
                        <div class="col-lg-7">
                            <span class="text-color">For Every type business</span>
                            <h2 class="mt-2 text-white">Entrust Your Project to Our Best Team of Professionals</h2>
                        </div>
                        <div class="col-lg-4">
                            <Link to="/contact" class="btn btn-main btn-round-full float-right">Contact Us</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AdService