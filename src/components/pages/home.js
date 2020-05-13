import React from 'react'
import '../../styles/home.css'
import chinedu from '../../images/chinedu.jpg'
import christianconnect from '../../images/christianconnect.png'
import esmartcard from '../../images/esmartcardsport.png'
import angelacademy from '../../images/angelAcademyport.png'
import diabetes from '../../images/diabetes.png'
import nsjsc from '../../images/nsjsc.png'
import teamwork from '../../images/teamworkApp.png'
import notifyme from '../../images/notify-me.png'
import posttimes from '../../images/post-times.png'
import todo from '../../images/todo.png'
import {Link} from 'react-router-dom'


function Home() {
    
    return (
        <div>
        <div className="banner_container">
            <div className="banner">
                <div className="mx-auto" >
                    <img src={chinedu} alt="chinedu" className="chinedu_img" />
                </div>
               <h1 className="intro_name">Hi, I'm Chinedu Emesue</h1>
               <p className="intro_info">Full Stack Web Developer, IT Engineer and TV Series Lover.</p>
            </div>
        </div>
        <div className="projects">
            <div className="container">
                <h2 className="feat_project">Featured Projects</h2>
                <div className="row">
                    <div className="col-sm-12 col-md-4">
                        <Link to="/projects/christian-connect">
                            <img src={christianconnect} alt="project 1" className="img-fluid" />
                        </Link>
                        <div className="project_description">
                            <h4>Christian Connect</h4>
                            <p>Web Application</p>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-4">
                        <Link to="/projects/esmartcard">
                            <img src={esmartcard} alt="project 2" className="img-fluid" />
                        </Link>
                        <div className="project_description">
                            <h4>Esmartcards</h4>
                            <p>Web Application</p>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-4">
                        <Link to="/projects/angel-academy">
                            <img src={angelacademy} alt="project 3" className="img-fluid" />
                        </Link>
                        <div className="project_description">
                            <h4>Angel Academy</h4>
                            <p>Web Application</p>
                        </div>
                    </div> 
                </div>
                <div className="row pro_sec2">
                    <div className="col-sm-12 col-md-4">
                        <Link to="/projects/kickout-diabetes">
                            <img src={diabetes} alt="project 4" className="img-fluid" />
                        </Link>
                        <div className="project_description">
                            <h4>Kick Out Diabetes</h4>
                            <p>Web Application</p>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-4">
                        <Link to="/projects/nsjsc">
                            <img src={nsjsc} alt="project 5" className="img-fluid" />
                        </Link>
                        <div className="project_description">
                            <h4>NSJSC</h4>
                            <p>Web Application</p>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-4">
                        <Link to="/projects/teamwork-app">
                            <img src={teamwork} alt="project 6" className="img-fluid" />
                        </Link>
                        <div className="project_description">
                            <h4>Teamwork App</h4>
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
        </div>
        </div>
    )
}

export default Home
