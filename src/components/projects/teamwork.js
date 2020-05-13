import React from 'react'
import img from '../../images/teamworkApp.png'
import '../../styles/projects.css'
import Footer from '../footer/footer'

function teamwork() {
    return (
        <div className="single_project">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-6 ">
                    <h3>Teamwork App</h3>
                    <p className="app_description">Teamwork is an internal social network for employees of an organization.</p>
                    
                    <h4>Technology Used</h4>
                    <p className="tech_used">Frontend: React.js, Redux, JavaScript</p>
                    <p className="tech_used">Backend: Node.js, Express</p>
                    <p className="tech_used">Database: PostgreSQL</p>
                    <p className="tech_used">Website: <a href="https://its-teamwork-app.herokuapp.com" rel="noopener noreferrer" target="_blank">Click Here</a></p>
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

export default teamwork
