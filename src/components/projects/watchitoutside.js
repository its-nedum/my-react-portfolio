import React from 'react'
import img from '../../images/watchitoutside.jpg'
import '../../styles/projects.css'
import Footer from '../footer/footer'

function Watchitoutside() {
    return (
        <div className="single_project">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-6 ">
                    <h3>Watch It Outside - Boston Edition</h3>
                    <p className="app_description">Watch it outside is a film festival website and also my OpenClassrooms project 3 for the 
                        Full Stack Web Developer path.
                    </p>
                    
                    <h4>Technology Used</h4>
                    <p className="tech_used">Frontend: HTML, CSS, Bootstrap</p>
                    
                    <p className="tech_used">Website: <a href="https://its-nedum.github.io/film-festival/" rel="noopener noreferrer" target="_blank">Click Here</a></p>
                    </div>
                    <div className="col-sm-12 col-md-6 app_image">
                        <img src={img} alt="todo" className="img-fluid" />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Watchitoutside
