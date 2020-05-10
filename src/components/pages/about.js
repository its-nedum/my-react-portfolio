import React from 'react'
import '../../styles/about.css'
import chinedu from '../../images/chinedu.jpg'

function About() {
    return (
        <div>
            <div className="aboutme_container">
                <div className="aboutme_banner">
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
            {/* Education and Work Experience */}
            <div className="eduwork_container">
                <div className="container-fluid">
                    <div className="row">
                        {/* Education start here */}
                        <div className="col-sm-12 col-md-6">
                            <div className="row">
                                <div className="col-sm-12 col-md-2 heading">
                                    <h2>Educational Experience</h2>
                                </div>
                                <div className="col-sm-12 col-md-9">
                                <table className="table table-striped table-dark">
                                    <thead>
                                        <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">First</th>
                                        <th scope="col">Last</th>
                                        <th scope="col">Handle</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                        <th scope="row">1</th>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
                                        </tr>
                                        <tr>
                                        <th scope="row">2</th>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                        </tr>
                                        <tr>
                                        <th scope="row">3</th>
                                        <td>Larry</td>
                                        <td>the Bird</td>
                                        <td>@twitter</td>
                                        </tr>
                                    </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        {/* Education ends here */}
                        {/* Work Experience start here */}
                        <div className="col-sm-12 col-md-6">
                            <div className="">
                                <h2>Work History</h2>
                            </div>
                            <div className="table">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="projects_container">
                <div className="projects_banner">
                
                </div>
            </div>
        </div>
    )
}

export default About
