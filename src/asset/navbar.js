import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (<nav className="navbar navbar-expand-lg  py-1" id="navbar">
        <div className="container">
            <Link className="navbar-brand" to="/">
                {/* Mega<span>kit.</span> */}
                <img src='images/logo1.png' alt='logo' style={{ height: '95px' }} />
            </Link>

            <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded="false" aria-label="Toggle navigation">
                <span className="fa fa-bars"></span>
            </button>

            <div className="collapse navbar-collapse text-center" id="navbarsExample09">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item active">
                        <Link className='nav-link' to="/about">About</Link>

                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/service">Services</Link>
                    </li>
                    <li className="nav-item"><Link className="nav-link" to="/product">Product</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
                </ul>
            </div>
        </div>
    </nav>
    )
}

export default Navbar