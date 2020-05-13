import React from 'react'
import img from '../../images/christianconnect.png'
import '../../styles/projects.css'
import Footer from '../footer/footer'

function christianconnect() {
    return (
        <div className="single_project">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-6 ">
                    <h3>Christian Connect</h3>
                    <p className="app_description">Christian Connect is a social network web application where people can meet, chat and connect.
                       Members also get notified of church programs, Job vacancies and gets access to download gospel media files - video and audio. </p>
                    
                    <h4>Technology Used</h4>
                    <p className="tech_used">Frontend: React.js, Redux, JavaScript</p>
                    <p className="tech_used">Backend: Node.js, Express, Websocket - Socket.io</p>
                    <p className="tech_used">Database: PostgreSQL</p>
                    <p className="tech_used">Website: <a href="https://christian-connect.herokuapp.com/" rel="noopener noreferrer" target="_blank">Click Here</a></p>
                    </div>
                    <div className="col-sm-12 col-md-3 app_image">
                        <img src={img} alt="christian-connect" className="img-fluid" />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default christianconnect
