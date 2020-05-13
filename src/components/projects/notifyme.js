import React from 'react'
import img from '../../images/notify-me.png'
import '../../styles/projects.css'
import Footer from '../footer/footer'

function notifyme() {
    return (
        <div className="single_project">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-6 ">
                    <h3>Notify Me</h3>
                    <p className="app_description">Notify me is an event notification tool for project management for employees of any organization.</p>
                    
                    <h4>Technology Used</h4>
                    <p className="tech_used">Frontend: React.js, Redux, JavaScript</p>
                    <p className="tech_used">Backend: Node.js, Express</p>
                    <p className="tech_used">Database: Firebase</p>
                    <p className="tech_used">Website: <a href="https://notify-me-app.netlify.com" rel="noopener noreferrer" target="_blank">Click Here</a></p>
                    </div>
                    <div className="col-sm-12 col-md-3 app_image">
                        <img src={img} alt="notifyme" className="img-fluid" />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default notifyme
