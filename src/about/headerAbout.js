import React from 'react'
import { Link } from 'react-router-dom'

function HeaderAbout() {
    return (
        <section className="page-title bg-1">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="block text-center">
                            <h1 className="text-capitalize mb-4 text-lg">About Us</h1>
                            <ul className="list-inline">
                                <li className="list-inline-item"><Link to="/" className="text-white">Home</Link></li>
                                <li className="list-inline-item"><span className="text-white">/</span></li>
                                <li className="list-inline-item"><Link to="/about" className="text-white-50">About Us</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeaderAbout