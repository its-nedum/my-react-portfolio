import React from 'react'
import img from '../../images/esmartcardsport.png'
import '../../styles/projects.css'
import Footer from '../footer/footer'

function esmartcards() {
    return (
        <div className="single_project">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-6 ">
                    <h3>Esmartcards</h3>
                    <p className="app_description">Esmartcards is an online result access card store and examination registration pin sales store. </p>
                    
                    <h4>Technology Used</h4>
                    <p className="tech_used">Frontend: HTML, CSS, JavaScript</p>
                    <p className="tech_used">Backend: PHP</p>
                    <p className="tech_used">Database: MySQL</p>
                    <p className="tech_used">Website: <a href="https://www.esmartcards.com.ng/" rel="noopener noreferrer" target="_blank">Click Here</a></p>
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

export default esmartcards
