import React from 'react'
import img from '../../images/chaletandcaviar.jpg'
import '../../styles/projects.css'
import Footer from '../footer/footer'

function Chalets() {
    return (
        <div className="single_project">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-6 ">
                    <h3>Chalets and Caviar</h3>
                    <p className="app_description">Chalet and Caviar is a real estate sales and rentage website and also my OpenClassrooms project 2 for the 
                        Full Stack Web Developer path.
                    </p>
                    
                    <h4>Technology Used</h4>
                    <p className="tech_used">Frontend: Wordpress</p>
                    
                    <p className="tech_used">Website: <a href="https://dev-chaletsandcaviarsales.pantheonsite.io/" rel="noopener noreferrer" target="_blank">Click Here</a></p>
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

export default Chalets
