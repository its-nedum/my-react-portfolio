import React from 'react'
import '../../styles/about.css'
import chinedu from '../../images/chinedu.jpg'

function About() {
    return (
        <div>
            <div className="first_container">
                <div className="first_banner">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 col-md-7 col-lg-7 about_container">
                                <h2>ABOUT ME</h2>
                                    <img src={chinedu} width="100" height="100" className="chinedu_pic" alt="Chinedu Emesue" />
                                <p className="about_text">
                                A full stack web developer with 4 years experience in software development. A critical thinker and fast learner experienced in achieving concrete goals on a strict deadline with vast knowledge of software development and its operations.
                                </p>
                                <div className="social_links">
                                <a href="https://github.com/its-nedum" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                                <a href="https://www.twitter.com/its_nedum" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
                                <a href="https://www.linkedin.com/in/chinedu-emesue" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
                                <a href="https://www.facebook.com/itsnedum" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a>
                                </div>
                            </div>
                           
                        </div>
                    </div>
                </div>
            </div>
            <div className="second_container">
                <div className="second_banner">
                
                </div>
            </div>
        </div>
    )
}

export default About
