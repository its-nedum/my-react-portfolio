import React from 'react'
import '../../styles/about.css'
import chinedu from '../../images/chinedu.jpg'
import Footer from '../footer/footer'

function About() {
    return (
        <div>
            {/* About me */}
            <div className="aboutme_container container">
                <div className="row">
                    <div className="col-sm-12 col-md-5">
                        <h3 className="heading">About Me</h3>
                    </div>
                    <div className="col-sm-12 col-md-7">
                        <img src={chinedu} width="100" height="100" className="chinedu_pic" alt="Chinedu Emesue" />
                        <p className="about_text">
                        I am Full Stack Web Developer and IT Engineer who’s passionate about helping organization leverage the internet to
                        grow their business and increase revenue. I have over 4 years experience working in the information technology and services industry with 
                        vast knowledge of software development and its operations.</p>
                        <p className="about_text">A critical thinker and a fast learner skilled in web and mobile application design and development using JavaScript, React, Node.js, Express, 
                        React-Native, Redux, PHP, HTML and CSS</p>
                        <p className="about_text">When I am not coding, I'm either watching a Tv series or visiting a friend</p>
                        <p className="about_text">I'm always looking to work on fun projects. Feel free to reach out with work inquiries, side projects, or just to say hello!</p>
                        
                        <div className="social_links">
                        <a href="https://github.com/its-nedum" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                        <a href="https://www.twitter.com/its_nedum" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
                        <a href="https://www.linkedin.com/in/chinedu-emesue" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
                        <a href="https://www.facebook.com/itsnedum" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Work Experience */}
            <div className="work_container container">
                <div className="row work_exp">
                    <div className="col-sm-12 col-md-7 work_details">
                        <p className="company">Hot 98.3 FM Abuja <span className="duration">2020 - Present</span></p>
                        <p className="position">IT Engineer and Traffic Officer</p>  

                        <p className="company">Middleware ICT Solutions <span className="duration">2019 - Present</span></p>
                        <p className="position">Freelance Software Engineer</p>

                        <p className="company">Global Access Providers and Networks <span className="duration">2019 - 2020</span></p>
                        <p className="position">IT Support Engineer</p> 

                        <p className="company">E-plus Network <span className="duration">2018 - 2019</span></p>
                        <p className="position">Website Developer</p>

                        <p className="company">Government Sec. School Agba <span className="duration">2017 - 2018</span></p>
                        <p className="position">Mathematics and Computer Studies Tutor</p>  

                        <p className="company">Global Access Providers and Networks <span className="duration">2016 - 2016</span></p>
                        <p className="position">IT Support Intern</p> 
                    </div>
                    <div className="col-sm-12 col-md-5 work_intro">
                        <h3 className="heading">Work Experience</h3>
                    </div>
                </div>
            </div>

            {/* Academic Qualification */}
            <div className="acad_container container">
                <div className="row">
                    <div className="col-sm-12 col-md-5">
                        <h3 className="heading">Academic Qualification</h3>
                    </div>
                    <div className="col-sm-12 col-md-7">
                        <p className="company">Openclassrooms <span className="duration">2020 - 2021</span></p>
                        <p className="position">Diploma in Full Stack Web Development</p> 

                        <p className="company">Anambra State University, Uli <span className="duration">2013 - 2017</span></p>
                        <p className="position">Bachelor of Science (B.Sc) Computer Science</p> 
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default About
