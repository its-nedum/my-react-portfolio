import React from 'react'
// import {Link} from 'react-router-dom'
import '../../styles/footer.css'

function Footer() {
    return (
        <div className="footer">
            <div className="card">
            
            <div className="card-footer text-muted text-center">
                <p>&copy; 2020 CHINEDU EMESUE, ALL RIGHTS RESERVED </p>
                <ul className="social_link"> 
                    <li><i className="fab fa-github"></i><a href="https://github.com/its-nedum" target="_blank" rel="noopener noreferrer"> Github</a></li>
                    <li><i className="fab fa-twitter"></i><a href="https://www.twitter.com/its_nedum" target="_blank" rel="noopener noreferrer"> Twitter</a></li>
                    <li><i className="fab fa-linkedin"></i><a href="https://www.linkedin.com/in/chinedu-emesue" target="_blank" rel="noopener noreferrer"> LinkedIn</a></li>
                    <li><i className="fab fa-facebook"></i><a href="https://www.facebook.com/itsnedum" target="_blank" rel="noopener noreferrer"> Facebook</a></li>
                </ul>
            </div>
            </div>
            
        </div>
    )
}

export default Footer
