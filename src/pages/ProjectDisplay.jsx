
import React from 'react'
import {useParams} from 'react-router-dom';
import {ProjectList} from '../Helpers/ProjectList';
import { FaGithub } from "react-icons/fa";

import '../styles/ProjectDisplay.css';


function ProjectDisplay() {  
   
  const {id}=useParams();
  const project = ProjectList[id];
    
  return (
    <div className="project">
      <h1> {project.name} </h1>
     < a href={project.live}> <img src= {project.image} />  </a>
      <p> 
         Skills:<span> {project.skills} </span>
      </p>
     
      <a href="projectdoc.github">
      <FaGithub className="footerIcon2 footerIcon" />          
      </a>

    </div>
  );
}

export default ProjectDisplay
