import React from 'react'
import '../../styles/footer.css'
import middleware from '../../images/Middleware Logo.png'
import zeabon from '../../images/Zea Logo.png'
import angel from '../../images/client4.png'
// import quickseller from '../../images/client5.png'
import esmart from '../../images/esmart.jpg'
import diabetes from '../../images/new.png'

const Home_footer = () => {
    return (
        <div className="footer home-footer">
            <div className="card">
                <div className="container">
                <h2 className="clients">Clients</h2>
                <hr></hr>
                    <div className="row">
                        <div className="col-sm-12 col-md-4 clients_img">
                            <img src={middleware} alt="client1" className="img-fluid" />
                        </div>
                        <div className="col-sm-12 col-md-4 clients_img">
                            <img src={zeabon} alt="client1" className="img-fluid" />
                        </div>
                        <div className="col-sm-12 col-md-4 clients_img">
                            <img src={angel} alt="client1" className="img-fluid" />
                        </div> 
                    </div>
                    <div className="row">
                        {/* <div className="col-sm-12 col-md-4 clients_img">
                            <img src={quickseller} alt="client1" className="img-fluid" />
                        </div> */}
                        <div className="col-sm-12 col-md-4 clients_img">
                            <img src={esmart} alt="client1" className="img-fluid" />
                        </div>
                        <div className="col-sm-12 col-md-4 clients_img">
                            <img src={diabetes} alt="client1" className="img-fluid" />
                        </div>
                    </div>
                </div>
            
            <div className="card-footer text-muted text-center apart">
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

export default Home_footer
