import React from 'react'
import '../../styles/footer.css'
import middleware from '../../images/Middleware Logo.png'
import zeabon from '../../images/Zea Logo.png'
import angel from '../../images/client4.png'
import quickseller from '../../images/client5.png'

function Home_footer() {
    return (
        <div className="footer">
            <div className="card">
                <div className="container">
                <h3>Clients</h3><hr></hr>
                    <div className="row">
                        <div className="col-sm-12 col-md-3">
                            <img src={middleware} alt="client1" className="img-fluid" />
                        </div>
                        <div className="col-sm-12 col-md-3">
                            <img src={zeabon} alt="client1" className="img-fluid" />
                        </div>
                        <div className="col-sm-12 col-md-3">
                            <img src={angel} alt="client1" className="img-fluid" />
                        </div>
                        <div className="col-sm-12 col-md-3">
                            <img src={quickseller} alt="client1" className="img-fluid" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="">
                            
                        </div>
                    </div>
                </div>
            
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

export default Home_footer
