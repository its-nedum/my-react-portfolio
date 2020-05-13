import React from 'react'
import img from '../../images/nsjsc.png'
import '../../styles/projects.css'
import Footer from '../footer/footer'

function nsjsc() {
    return (
        <div className="single_project">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-6 ">
                    <h3>NSJSC</h3>
                    <p className="app_description">This is the offcial website for Nasarawa State Judicial Service Commission.</p>
                    
                    <h4>Technology Used</h4>
                    <p className="tech_used">Frontend: HTML, CSS, JavaScript</p>
                    <p className="tech_used">Backend: PHP</p>
                    <p className="tech_used">Database: MySQL</p>
                    <p className="tech_used">Website: <a href="https://www.nsjsc.org.ng" rel="noopener noreferrer" target="_blank">Click Here</a></p>
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

export default nsjsc
