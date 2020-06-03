import React from 'react'
import '../../styles/projects.css'
import Footer from '../footer/footer'
import jsonData from './data.json'

function SingleProject(props) {
    const slug = props.match.params.slug;
    const func = (item) => {
        return item.slug === slug
    }
    let project = jsonData.filter(func)
    
    return (
        <div className="single_project">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-6 ">
                    <h3>{project[0].title}</h3>
                    <p className="app_description">{project[0].description}</p>
                    
                    <h4>Technology Used</h4>
                    <p className="tech_used">Frontend: {project[0].tech.frontend}</p>
                    {project[0].tech.backend ? 
                    <p className="tech_used">Backend: {project[0].tech.backend}</p>
                    : null }
                    {project[0].tech.database ? 
                    <p className="tech_used">Database: {project[0].tech.database}</p>
                    : null }
                    <p className="tech_used">Website: <a href={project[0].url} rel="noopener noreferrer" target="_blank">Click Here</a></p>
                    </div>
                    <div className="col-sm-12 col-md-3 app_image">
                        <img src={project[0].img} alt={project[0].slug} className="img-fluid" />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default SingleProject
