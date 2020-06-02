import React from 'react'
import Footer from '../footer/footer'
import {Link} from 'react-router-dom'
import notifyme from '../../images/notify-me.png'
import posttimes from '../../images/post-times.png'
import todo from '../../images/todo.png'
import chalets from '../../images/chaletandcaviar.jpg'
import watchitoutside from '../../images/watchitoutside.jpg'

const Project = () => {
    return (
        <div className="more_projects">
            <div className="container">
                <h2>More Projects</h2>
                <div className="row">
                        <div className="col-sm-12 col-md-6">
                                <Link to="/projects/watchitoutside">
                                    <img src={watchitoutside} alt="project 7" className="img-fluid" />
                                </Link>
                                <div className="project_description">
                                    <h4>Watch It Outside</h4>
                                    <p>Web Application</p>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-6">
                                <Link to="/projects/chalets-and-caviar">
                                    <img src={chalets} alt="project 8" className="img-fluid" />
                                </Link>
                                <div className="project_description">
                                    <h4>Chalet and Cavair</h4>
                                    <p>Web Application</p>
                                </div>
                            </div>
                            
                    </div>
                <div className="row">
                    <div className="col-sm-12 col-md-4">
                            <Link to="/projects/notify-me">
                                <img src={notifyme} alt="project 7" className="img-fluid" />
                            </Link>
                            <div className="project_description">
                                <h4>Notify Me</h4>
                                <p>Web Application</p>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-4">
                            <Link to="/projects/post-times">
                                <img src={posttimes} alt="project 8" className="img-fluid" />
                            </Link>
                            <div className="project_description">
                                <h4>Post Times</h4>
                                <p>Web Application</p>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-4">
                            <Link to="/projects/todo">
                                <img src={todo} alt="project 8" className="img-fluid" />
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
