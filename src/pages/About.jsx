
import React from 'react';
import "../styles/About.css";

import Html from '../img/html.svg';
import Css from '../img/css.svg';
import Js from '../img/js.svg';
import ReactIcon from '../img/reactIcon.svg';
import Figma from '../img/figma.svg';
import Canva from '../img/Canva.svg';
import Github from '../img/Github.svg';
import Git from '../img/Git.svg';



function About() {
  const url= 
  'https://jobloop.no/kodehode-modellen'  
  
  return (
    <main className="about">      
      <div className="container">           
        <div className="about-title">
          <h2> A creative mind fascinated by new challenges </h2>
        </div>  

        <div className="about-content"> 
          <p> Hello everyone, my name is Cleide and I'm originally from Brazil but I've been living in Norway for many years. I have very good communication skills despite being a pretty quiet person by nature. </p>
          <p> Coding and web design caught my attention last year. I'm currently participating in a 1 year <span> frontend developer </span> course called Kodehode, organized by <span> Jobloop AS </span> ⇢ <a href={url}> https://jobloop.no/kodehode-modellen </a> </p>
          <p> Understanding the creative process behind website design, the appeal of the colors and experimenting with the right design combination is fascinating. Coding is surprisingly rewarding, and it has changed the way I think and organize information. I feel I've found a good way to solve practical problems creating something that can potentially be used by people. </p> 
          <p> Beside all this, I refresh my mind camping. It has become a hobby for me in the summertime and it is amazing to feel the Norwegian summer vibe when the sunshine shows up. I've traveled around  all Norway, camping here and there enjoying many beautiful scenic routes and the beauty of the Norwegian fjords.</p>
          <p> I'm always waiting for the next adventure or challenge! </p> 
          <p> Let's work together?</p>
        </div>           
        
        <div className='about-skills'>
          <h1> My skills ⇢ </h1>
          <div> 
           <img src={Html} alt="Html logo" />
          </div>

          <div>  
            <img src={Css} alt="Css logo" />
          </div>

          <div>
            <img src={Js} alt="Javascript logo" />
          </div>

          <div>
            <img src={ReactIcon} alt="React logo" />
          </div>

          <div>   
            <img src={Figma} alt="Figma logo" />
          </div>

          <div>
            <img src={Canva} alt="Canva logo" />
          </div>

          <div>    
            <img src={Github} alt="Github logo" />
          </div>

          <div>
            <img src={Git} alt="Git logo" />
          </div>

        </div>
      
      </div>

      </main>  
  )
}

export default About
