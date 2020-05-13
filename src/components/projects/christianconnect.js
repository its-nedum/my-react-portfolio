import React from 'react'
import img from '../../images/christianconnect.png'
import '../../styles/projects.css'

function christianconnect() {
    return (
        <div className="single_project">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-6 app_description">
                    <h3>Christian Connect</h3>
                    <p>Christian Connect is a social network web application where Christian can meet, chat and connect.
                       Registered members also gets access to download gospel media files - video and audio, get notified of church programs also view Job vacancies. </p>
                    
                    <h4>Technology Used</h4>
                    <p>Frontend: React.js, Redux</p>
                    <p>Backend: Node.js, Express, Websocket - Socket.io</p>
                    <p>Database: PostgreSQL</p>
                    <p>Url: <a href="https://christian-connect.herokuapp.com/" rel="noopener noreferrer" target="_blank">Click Here</a></p>
                    </div>
                    <div className="col-sm-12 col-md-3 app_image">
                        <img src={img} alt="christian-connect" className="img-fluid" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default christianconnect
