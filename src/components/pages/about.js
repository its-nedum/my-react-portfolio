import React from 'react'
import '../../styles/about.css'
import chinedu from '../../images/chinedu.jpg'
import Footer from '../footer/footer'

function About() {
    return (
        <div>
            <div className="aboutme_container">
                <div className="aboutme_banner">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 col-md-7 col-lg-7 about_container">
                                <h2>About me</h2>
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
            
            <div className="eduwork_container">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 heading">
                                <h2>Work History</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12 col-md-6 sectionOne">
                            <p className="position">
                                <span className="icon">&#8594;</span> 
                                    IT Engineer and Traffic Officer <br/>
                                    <span className="company">Hot 98.3 FM Abuja </span><i className="duration">February 2020 – till date</i>
                            </p>
                            <p className="position">
                                <span className="icon">&#8594;</span> 
                                Information Technology Support Engineer <br/>
                                    <span className="company">Global Access Providers and Network </span><i className="duration">March 2019 – January 2020</i>
                            </p>
                            <p className="position">
                                <span className="icon">&#8594;</span> 
                                Website Developer <br/>
                                    <span className="company">E-plus Network, Lafia </span><i className="duration">October 2018 – February 2019</i>
                            </p>
                        </div>
                        <div className="col-sm-12 col-md-6 sectionTwo">
                            <p className="position">
                                <span className="icon">&#8594;</span> 
                                Mathematics and Computer Studies Tutor (NYSC) <br/>
                                    <span className="company">Government Secondary School Agba </span><i className="duration">December 2017 – October 2018</i>
                            </p>
                            <p className="position">
                                <span className="icon">&#8594;</span> 
                                IT Support (Internship) <br/>
                                    <span className="company">Global Access Provider and Networks </span><i className="duration">March 2016 – October 2016</i>
                            </p>
                            <p className="position">
                                <span className="icon">&#8594;</span> 
                                Computer Operator <br/>
                                    <span className="company">BII Computer Institute </span><i className="duration">February 2011 – July 2011</i>
                            </p>
                        </div>    
                    </div>
                </div>
            </div>
            <div className="projects_container">
                <div className="projects_banner">
                
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default About
