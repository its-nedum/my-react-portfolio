import React from 'react'
import Footer from '../footer/footer'
import {Link} from 'react-router-dom'

const Project = () => {
    return (
        <div className="more_projects">
            <div className="container">
                <h2>More Projects</h2>
                <div className="row">
                        <div className="col-sm-12 col-md-6">
                                <Link to="/projects/watchit_outside">
                                    <img src="https://res.cloudinary.com/its-nedum/image/upload/v1591181524/portfolioProjectImages/watchitoutside_w4tiye.jpg" alt="watchit_outside" className="img-fluid" />
                                </Link>
                                <div className="project_description">
                                    <h4>Watch It Outside</h4>
                                    <p>Web Application</p>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-6">
                                <Link to="/projects/chalets_and_caviar">
                                    <img src="https://res.cloudinary.com/its-nedum/image/upload/v1591181526/portfolioProjectImages/chaletandcaviar_rect0m.jpg" alt="chalets_and_caviar" className="img-fluid" />
                                </Link>
                                <div className="project_description">
                                    <h4>Chalet and Cavair</h4>
                                    <p>Web Application</p>
                                </div>
                            </div>
                            
                    </div>
                <div className="row">
                    <div className="col-sm-12 col-md-4">
                            <Link to="/projects/notify_me">
                                <img src="https://res.cloudinary.com/its-nedum/image/upload/v1591181517/portfolioProjectImages/notify-me_dh0s50.png" alt="notify_me" className="img-fluid" />
                            </Link>
                            <div className="project_description">
                                <h4>Notify Me</h4>
                                <p>Web Application</p>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-4">
                            <Link to="/projects/post_times">
                                <img src="https://res.cloudinary.com/its-nedum/image/upload/v1591181520/portfolioProjectImages/post-times_ud4irs.png" alt="post_times" className="img-fluid" />
                            </Link>
                            <div className="project_description">
                                <h4>Post Times</h4>
                                <p>Web Application</p>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-4">
                            <Link to="/projects/todo">
                                <img src="https://res.cloudinary.com/its-nedum/image/upload/v1591181521/portfolioProjectImages/todo_gtkio1.png" alt="project 8" className="img-fluid" />
                            </Link>
                            <div className="project_description">
                                <h4>To Do List App</h4>
                                <p>Web Application</p>
                            </div>
                        </div>
                    </div>
                    
            </div>
            <Footer />
        </div>
    )
}

export default Project
