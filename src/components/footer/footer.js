import React from 'react'
// import {Link} from 'react-router-dom'
import '../../styles/footer.css'

function Footer() {
    return (
        <div class="footer">
            <div class="card">
            {/* <div class="card-body">
            <ul class="footer_link">
                    <li class="">
                        <Link class="" to="/">Home </Link>
                    </li>
                    <li class="">
                        <Link class="" to="/about">About Me</Link>
                    </li>
                    <li class="">
                        <Link class="" to="/contact">Contact Me</Link>
                    </li>
                    </ul>    
            </div> */}
            <div class="card-footer text-muted text-center">
                <p>All material &copy; Chinedu Emesue 2020</p>
                <p> 
                    <a href="https://github.com/its-nedum" target="_blank" rel="noopener noreferrer">Github</a>
                    <a href="https://www.twitter.com/its_nedum" target="_blank" rel="noopener noreferrer">Twitter</a>
                    <a href="https://www.linkedin.com/in/chinedu-emesue" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    <a href="https://www.facebook.com/itsnedum" target="_blank" rel="noopener noreferrer">Facebook</a>
                </p>
            </div>
            </div>
            
        </div>
    )
}

export default Footer
