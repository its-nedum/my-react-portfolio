import React from 'react'
import img from '../../images/post-times.png'
import '../../styles/projects.css'
import Footer from '../footer/footer'

function posttimes() {
    return (
        <div className="single_project">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-6 ">
                    <h3>Post Times</h3>
                    <p className="app_description">Post times is a blog website template</p>
                    
                    <h4>Technology Used</h4>
                    <p className="tech_used">Frontend: React.js, JavaScript, Materialize Css</p>
                    
                    <p className="tech_used">Website: <a href="https://post-times.netlify.com" rel="noopener noreferrer" target="_blank">Click Here</a></p>
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

export default posttimes
