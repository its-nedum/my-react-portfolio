import React from 'react'
import '../../styles/home.css'
import {Link} from 'react-router-dom'
import Footer from '../footer/home_footer'


const Home = () => {
    
    return (
        <div>
        <div className="banner_container">
            <div className="banner">
                <div className="mx-auto" >
                    <img src="https://res.cloudinary.com/its-nedum/image/upload/v1591184445/portfolioProjectImages/chinedu_yrv960.jpg" alt="chinedu" className="chinedu_img" />
                </div>
               <h1 className="intro_name">Hi, I'm Chinedu Emesue</h1>
               <p className="intro_info">Full Stack Web Developer and IT Engineer</p>
            </div>
        </div>
        <div className="projects">
            <div className="container">
                <h2 className="feat_project">Featured Projects</h2>
                <div className="row">
                    <div className="col-sm-12 col-md-4">
                        <Link to="/projects/christian_connect">
                            <img src='https://res.cloudinary.com/its-nedum/image/upload/v1591181517/portfolioProjectImages/christianconnect_parzs1.png' alt="christian_connect" className="img-fluid" />
                        </Link>
                        <div className="project_description">
                            <h4>Christian Connect</h4>
                            <p>Web Application</p>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-4">
                        <Link to="/projects/esmartcards">
                            <img src="https://res.cloudinary.com/its-nedum/image/upload/v1591181527/portfolioProjectImages/esmartcardsport_pjt3r3.png" alt="esmartcards" className="img-fluid" />
                        </Link>
                        <div className="project_description">
                            <h4>Esmartcards</h4>
                            <p>Web Application</p>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-4">
                        <Link to="/projects/angel_academy">
                            <img src="https://res.cloudinary.com/its-nedum/image/upload/v1591181529/portfolioProjectImages/angelAcademyport_c68odb.png" alt="angel_academy" className="img-fluid" />
                        </Link>
                        <div className="project_description">
                            <h4>Angel Academy</h4>
                            <p>Web Application</p>
                        </div>
                    </div> 
                </div>
                <div className="row pro_sec2">
                    <div className="col-sm-12 col-md-4">
                        <Link to="/projects/kickout_diabetes">
                            <img src="https://res.cloudinary.com/its-nedum/image/upload/v1591181520/portfolioProjectImages/diabetes_jjxbg7.png" alt="kickout_diabetes" className="img-fluid" />
                        </Link>
                        <div className="project_description">
                            <h4>Kick Out Diabetes</h4>
                            <p>Web Application</p>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-4">
                        <Link to="/projects/nsjsc">
                            <img src="https://res.cloudinary.com/its-nedum/image/upload/v1591181526/portfolioProjectImages/nsjsc_mk4p2l.png" alt="nsjsc" className="img-fluid" />
                        </Link>
                        <div className="project_description">
                            <h4>NSJSC</h4>
                            <p>Web Application</p>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-4">
                        <Link to="/projects/teamwork">
                            <img src="https://res.cloudinary.com/its-nedum/image/upload/v1591181518/portfolioProjectImages/teamworkApp_vjtf0r.png" alt="teamwork" className="img-fluid" />
                        </Link>
                        <div className="project_description">
                            <h4>Teamwork App</h4>
                            <p>Web Application</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <Link to="/projects" className="btn btn-primary">More Projects</Link>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
        </div>
    )
}

export default Home
