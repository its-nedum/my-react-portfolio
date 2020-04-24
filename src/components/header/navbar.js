import React from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link clLinkss="navbar-brand" to="#">Chinedu Emesue</Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto">
                    <li class="nav-item active">
                        <Link class="nav-link" to="/">Home <span class="sr-only">(current)</span></Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="/about">About Me</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="/contact">Contact Me</Link>
                    </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
