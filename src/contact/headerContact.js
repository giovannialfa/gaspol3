import React from 'react'
import { Link } from 'react-router-dom'

function HeaderContact() {
    return (<section className="page-title bg-1">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="block text-center">
                        <span className="text-white">Contact Us</span>
                        <h1 className="text-capitalize mb-4 text-lg">Get in Touch</h1>
                        <ul className="list-inline">
                            <li className="list-inline-item"><Link to="/" className="text-white">Home</Link></li>
                            <li className="list-inline-item"><span className="text-white">/</span></li>
                            <li className="list-inline-item"><Link to="/contact" className="text-white-50">Contact Us</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default HeaderContact