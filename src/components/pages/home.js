import React from 'react'
import '../../styles/home.css'
import chinedu from '../../images/chinedu.jpg'

function Home() {
    
    return (
        <div className="banner_container">
            <div className="banner">
                <div className="mx-auto" >
                    <img src={chinedu} alt="chinedu" className="chinedu_img" />
                </div>
               <h1 className="intro_name">Hi, I'm Chinedu Emesue</h1>
               <p className="intro_info">Full Stack Web Developer, IT Engineer and TV Series Lover.</p>
            </div>
        </div>
    )
}

export default Home
