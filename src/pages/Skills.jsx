
import "../styles/Skills.css";


import Html from '../img/Html.png';
import Css from '../img/Css.png';
import React from '../img/React.png';
import Javascript from '../img/Javascript.png';
import Figma from '../img/Figma.png';
import Canva from '../img/Canva.png';
import Design from '../img/Design.png';
import Github from '../img/Github.png';
import Git from '../img/Git.png'; 


function Skills() {
  return (
    <div className="skills_container">
      <h1> My skills </h1>
      <div>
        <img src={Html} alt="Html logo" />
        <p> HTML </p>
      </div>

      <div>
        <img src={Css} alt="Css logo" />
        <p> CSS </p>
      </div>

      <div>
        <img src={Javascript} alt="Javascript logo" />
        <p> JavaScript </p>
    </div> 

    
    <div>
      <img src={React}  alt="React logo" />
      <p> React </p>
    </div>    

    <div>
      <img src={Figma} alt="Figma Design logo" />
      <p> Figma </p>
    </div>  

    <div>
      <img src={Canva} alt="Canva design logo" />
      <p> Canva Design </p>
    </div>  

    <div>
      <img src={Design} alt="Design Thinking" />
      <p> Design Thinking </p>
    </div>  

    <div>
      <img src={Github} alt="Github logo" />
      <p> Github </p>
    </div>  

    <div>
      <img src={Git} alt="Git logo" />
      <p> Git </p>
    </div>  

  </div>
      
  );
}

export default Skills


