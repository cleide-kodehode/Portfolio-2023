import React from 'react';
import ProjectItem from "../components/ProjectItem";
import Drumkit from '../img/Drumkit.png';
import Parallax from '../img/parallax.png';
import Form from '../img/form.png';
import Christmas from '../img/christmas.png';


import '../styles/Projects.css';


function Projects() {
  return (

    <div className="projects">
      <h1> My personal projects </h1>
    <div className="projectList">
        <ProjectItem name="Parallax Website" image={Parallax} />
        <ProjectItem name="Drumkit" image={Drumkit} />
        <ProjectItem name="Form" image={Form} />
        <ProjectItem name="christmas counter down" image={Christmas} />       
    </div>

    </div>
    
  );
}

export default Projects
