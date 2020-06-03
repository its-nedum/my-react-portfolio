import React from 'react'
import '../../styles/footer.css'

const Home_footer = () => {
    return (
        <div className="footer home-footer">
            <div className="card">
                <div className="container">
                <h2 className="clients">Clients</h2>
                <hr></hr>
                    <div className="row">
                        <div className="col-sm-12 col-md-4 clients_img">
                            <img src="https://res.cloudinary.com/its-nedum/image/upload/v1591184392/portfolioProjectImages/Middleware_Logo_bpabty.png" alt="middleware" className="img-fluid" />
                        </div>
                        <div className="col-sm-12 col-md-4 clients_img">
                            <img src="https://res.cloudinary.com/its-nedum/image/upload/v1591184390/portfolioProjectImages/Zea_Logo_swvfhu.png" alt="zeabon" className="img-fluid" />
                        </div>
                        <div className="col-sm-12 col-md-4 clients_img">
                            <img src="https://res.cloudinary.com/its-nedum/image/upload/v1591184393/portfolioProjectImages/client4_fzwjh2.png" alt="angel" className="img-fluid" />
                        </div> 
                    </div>
                    <div className="row">
                        <div className="col-sm-12 col-md-4 clients_img">
                            <img src="https://res.cloudinary.com/its-nedum/image/upload/v1591184392/portfolioProjectImages/esmart_zvlaij.jpg" alt="esmart" className="img-fluid" />
                        </div>
                        <div className="col-sm-12 col-md-4 clients_img">
                            <img src="https://res.cloudinary.com/its-nedum/image/upload/v1591184392/portfolioProjectImages/new_gky96n.png" alt="diabetes" className="img-fluid" />
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
