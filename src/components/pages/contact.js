import React from 'react'
import Footer from '../footer/footer'
import '../../styles/contact.css'

function Contact() {
    return (
        <div className="contact_container">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-6">
                        <h3>Get In Touch</h3>
                    <p className="contact_intro">If you have any fun project that you want me to help build or you feel that
                       I will be a great addition to your team.</p>
                    <p className="contact_intro">Feel free to reach out to me. I'm always looking to work on fun projects.</p>
                    <div className="social_links">
                        <a href="https://github.com/its-nedum" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                        <a href="https://www.twitter.com/its_nedum" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
                        <a href="https://www.linkedin.com/in/chinedu-emesue" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
                        <a href="https://www.facebook.com/itsnedum" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a>
                    </div>
                    </div>
                    <form className="col-sm-12 col-md-6">
                        <div className="row">
                            <div className="col-sm-12 col-md-6">
                                <div className="form-group mb-3">
                                    <label for="fullname">Full Name</label>
                                    <input type="text" id="fullname" className="form-control" placeholder="John Doe" required=""/>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-6">
                                <div className="form-group mb-3">
                                    <label for="email">E-mail</label>
                                    <input type="email" id="email" className="form-control" placeholder="john.doe@gmail.com" required=""/>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="form-group">
                                    <label for="message">Message</label>
                                    <textarea className="form-control" id="message" rows="8" placeholder="Hello..." required=""></textarea>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="submit_btn">
                                <input type="submit" className="form-control btn btn-primary" value="Submit" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Contact
