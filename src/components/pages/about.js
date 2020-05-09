import React from 'react'
import '../../styles/about.css'
import chinedu from '../../images/chinedu.jpg'

function About() {
    return (
        <div>
            <div className="first_container">
                <div className="first_banner">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 col-md-7 about_container">
                                <h2>ABOUT ME</h2>
                                    <img src={chinedu} width="100" height="100" className="chinedu_pic" alt="Chinedu Emesue" />
                                <p className="about_text">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas debitis dolore illo sint fuga. Maxime debitis sed placeat fugiat eum minus? Odio repellat reprehenderit alias error ipsum doloribus minus consequatur.
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit accusantium cupiditate fugiat ducimus delectus esse optio dicta aliquid, debitis, temporibus voluptates consequatur ad ullam labore doloribus dolore. Repudiandae, rerum suscipit?
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia maiores quos magni repellat blanditiis suscipit! Magni, aut commodi modi a sint animi cupiditate tenetur, similique ea molestias fuga! Temporibus, aspernatur!
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis vero reprehenderit dolores porro iure error atque molestias exercitationem dolorum nostrum, delectus, enim assumenda distinctio facere numquam ipsa provident. Distinctio, magni!
                                </p>
                            </div>
                            {/* <div className="col-sm-12 col-md-4 test">
                                Section 
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
            <div className="second_container">
                <div className="second_banner">
                
                </div>
            </div>
        </div>
    )
}

export default About
