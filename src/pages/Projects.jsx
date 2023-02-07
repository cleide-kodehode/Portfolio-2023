import React from 'react';
import ProjectItem from "../components/ProjectItem";
import Drumkit from '../img/Drumkit.png';
import Parallax from '../img/parallax.png';
import Form from '../img/form.png';
import Christmas from '../img/christmas.png';


import '../styles/Projects.css';


function Projects() {
  return (
    <main className="projects-main">
      <h1> My Personal Projects </h1>
    <div className="projectList">
        <ProjectItem name="Parallax Website" image={Parallax} />
        <ProjectItem name="Form" image={Form} />
        <ProjectItem name="Drumkit" image={Drumkit} />   
        <ProjectItem name="Christmas" image={Christmas} />   
    </div>

    </main>
    
  );
}

export default Projects
