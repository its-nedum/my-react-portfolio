import React from 'react'
import img from '../../images/angelAcademyport.png'
import '../../styles/projects.css'
import Footer from '../footer/footer'

function angelacademy() {
    return (
        <div className="single_project">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-6 ">
                    <h3>Angel Academy</h3>
                    <p className="app_description">This is the school portal for Angel Academy </p>
                    
                    <h4>Technology Used</h4>
                    <p className="tech_used">Frontend: HTML, CSS, JavaScript</p>
                    <p className="tech_used">Backend: PHP</p>
                    <p className="tech_used">Database: MySQL</p>
                    <p className="tech_used">Website: <a href="https://www.angelacademy.sch.ng" rel="noopener noreferrer" target="_blank">Click Here</a></p>
                    </div>
                    <div className="col-sm-12 col-md-3 app_image">
                        <img src={img} alt="esmartcards" className="img-fluid" />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default angelacademy
