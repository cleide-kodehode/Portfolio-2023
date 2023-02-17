import React from 'react';
import ProjectItem from "../components/ProjectItem";

import {ProjectList} from "../Helpers/ProjectList";


import '../styles/Projects.css';


function Projects() {
  return (
    <main className="projects-main">
      <h1> My Projects </h1>
      <div className="projectList">
      {ProjectList.map((project, index) => {
        return  <ProjectItem id={index} name= {project.name} image={project.image} />
      })}        
      </div>
    </main>    
  );
}

export default Projects
