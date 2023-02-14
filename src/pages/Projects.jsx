import React from 'react';
import ProjectItem from "../components/ProjectItem";

import Parallax from '../img/parallax.png';
import Ecommerce from '../img/ecommerce.png';
import Drumkit from '../img/Drumkit.png';
import Form from '../img/form.png';
import Christmas from '../img/christmas.png';


import '../styles/Projects.css';

function Projects() {
  return (
    <main className="projects-main">
      <h1> My Projects </h1>
    <div className="project-list">
        <ProjectItem name="Parallax Website" image={Parallax} />
        <ProjectItem name="ecommerce" image={Ecommerce} />  
        <ProjectItem name="Drumkit" image={Drumkit} /> 
        <ProjectItem name="Form" image={Form} />        
        <ProjectItem name="Christmas" image={Christmas} />   
        
    </div>

    </main>
    
  );
}

export default Projects
