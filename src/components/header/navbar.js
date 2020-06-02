import React from 'react'
import {Link} from 'react-router-dom'
import '../../styles/navbar.css'

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light">
                <Link className="navbar-brand nav_link_black" to="/">Chinedu Emesue</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <Link className="nav-link nav_link_black" to="/">Home <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link nav_link_black" to="/about">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link nav_link_black" to="/contact">Contact</Link>
                    </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
