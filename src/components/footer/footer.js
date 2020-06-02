import React from 'react'
import '../../styles/footer.css'

function Footer() {
    return (
        <div className="footer">
            <div className="card">
            
            <div className="card-footer text-muted text-center myfooter">
                <p>&copy; 2020 CHINEDU EMESUE, ALL RIGHTS RESERVED </p>
                <ul className="social_link"> 
                    <li><span className="fab fa-github"></span><a href="https://github.com/its-nedum" target="_blank" rel="noopener noreferrer"> Github</a></li>
                    <li><span className="fab fa-twitter"></span><a href="https://www.twitter.com/its_nedum" target="_blank" rel="noopener noreferrer"> Twitter</a></li>
                    <li><span className="fab fa-linkedin"></span><a href="https://www.linkedin.com/in/chinedu-emesue" target="_blank" rel="noopener noreferrer"> LinkedIn</a></li>
                    <li><span className="fab fa-facebook"></span><a href="https://www.facebook.com/itsnedum" target="_blank" rel="noopener noreferrer"> Facebook</a></li>
                </ul>
            </div>
            </div>
            
        </div>
    )
}

export default Footer
