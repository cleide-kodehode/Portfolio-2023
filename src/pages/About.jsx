
import React from 'react';
import "../styles/About.css";
import Camping from '../img/camping.png';
import { Icon } from '@iconify/react';



function About() {
  return (
    <main className="about">      
      <div className="container">           
        <div className="about-title">
          <h2> A creative mind fascinated by new challenges </h2>
        </div>  

        <div className="about-content">               
            <img src={Camping} 
            alt="camp tent in the forest at night"
            className='about-img'
            />    
               
          <p>
            Hello everyone, my name is Cleide and I'm originally from Brazil but I've been living in Norway for many years. I have very good communication skills despite being a pretty quiet person by nature. <br /> 
            Coding and web design caught my attention last year. I'm currently participating in a 1 year frontend developer course called Kodehode, organized by Jobloop AS. <br />
            Understanding the creative process behind website design, the appeal of the colors and experimenting with the right design combination is fascinating. 
            Coding is surprisingly rewarding, and it has changed the way I think and organize information. 
            I feel I've found a good way to solve practical problems creating something that can potentially be used by people.  <br /> 
            Beside all this, I refresh my mind camping. It has become a hobby for me in the summertime and it is amazing to feel the Norwegian summer vibe when the sunshine shows up. 
            I've traveled around  all Norway, camping here and there enjoying many beautiful scenic routes and the beauty of the Norwegian fjords. 
            I'm always waiting for the next adventure or challenge! <br /> Let's work together?  
          </p>          
        </div>
        
        <div className='about-skills'>
          <div> 
            <Icon icon="logos:html-5" className='skills-icon'/>
          </div>

          <div>  
            <Icon icon="logos:css-3" className='skills-icon' />
          </div>

          <div>
            <Icon icon="logos:javascript" className='skills-icon' />
          </div>

          <div>
            <Icon icon="logos:react" className='skills-icon' />
          </div>

          <div>   
            <Icon icon="skill-icons:figma-dark" className='skills-icon' />
          </div>

          <div>
            <Icon icon="cib:canva"  className='skills-icon-canva' />
          </div>

          <div>    
            <Icon icon="logos:github" className='skills-icon-github' />
          </div>

          <div>
            <Icon icon="fontisto:git" className='skills-icon-git' />
          </div>

        </div>
      
      </div>

      </main>  
  )
}

export default About
