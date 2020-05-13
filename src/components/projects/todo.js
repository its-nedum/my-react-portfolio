import React from 'react'
import img from '../../images/todo.png'
import '../../styles/projects.css'
import Footer from '../footer/footer'

function todo() {
    return (
        <div className="single_project">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-6 ">
                    <h3>Todo List</h3>
                    <p className="app_description">A to do list app</p>
                    
                    <h4>Technology Used</h4>
                    <p className="tech_used">Frontend: React.js, JavaScript</p>
                    
                    <p className="tech_used">Website: <a href="its-nedum-todolist.netlify.com/" rel="noopener noreferrer" target="_blank">Click Here</a></p>
                    </div>
                    <div className="col-sm-12 col-md-3 app_image">
                        <img src={img} alt="todo" className="img-fluid" />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default todo
