
import React from 'react';
import "../styles/About.css";

import Html from '../img/html.svg';
import Css from '../img/css.svg';
import Js from '../img/js.svg';
import Reacticon from '../img/reacticon.svg';
import Figma from '../img/figma.svg';
import Canva from '../img/Canva.svg';
import Github from '../img/Github.svg';
import Git from '../img/Git.svg';



function About() {
  const Url = 'https://jobloop.no/kodehode-modellen'
  
  return (
    <main className="about">      
      <div className="container">           
        <div className="about-title">
          <h2> A creative mind fascinated by new challenges </h2>
        </div>  

        <div className="about-content"> 
          <p> Hello everyone, my name is Cleide and I'm originally from Brazil but I've been living in Norway for many years. I have very good communication skills despite being a pretty quiet person by nature. </p>
          <p> Coding and web design caught my attention last year. I'm currently participating in a 1 year frontend developer course called Kodehode, organized by <a href={Url}> <span> Jobloop AS. </span> </a> </p>
          <p> Understanding the creative process behind website design, the appeal of the colors and experimenting with the right design combination is fascinating. Coding is surprisingly rewarding, and it has changed the way I think and organize information. I feel I've found a good way to solve practical problems creating something that can potentially be used by people. </p> 
          <p> Beside all this, I refresh my mind camping. It has become a hobby for me in the summertime and it is amazing to feel the Norwegian summer vibe when the sunshine shows up. I've traveled around  all Norway, camping here and there enjoying many beautiful scenic routes and the beauty of the Norwegian fjords.</p>
          <p> I'm always waiting for the next adventure or challenge! </p> 
          <p> Let's work together?</p>
        </div>           
        
        <div className='about-skills'>
          <h2> My Skills</h2>
          <div className='skills-icons'>
            <img src={Html} alt="Html logo" />
            <img src={Css} alt="Css logo" />
            <img src={Js} alt="Javascript logo" />
            <img src={Reacticon} alt="React logo" />
            <img src={Figma} alt="Figma logo" />
            <img src={Canva} alt="Canva logo" />
            <img src={Github} alt="Github logo" />
            <img src={Git} alt="Git logo" />
          </div>

        </div>
      </div>

      </main>  
  )
}

export default About
