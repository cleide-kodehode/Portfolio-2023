
import React from 'react'
import "../styles/Home.css";
import Camper from "../img/camper.png";



function Home() {
  return (
    <div className="container">
      <div className="home">  
        <div className="home-content">          
          <h2> Hey there! <span role="img" aria-label="Grinning Face"> &#128512;</span> </h2>
          <h1> I'm Cleide Florisbella</h1>
          <p>  
            A juice lover who drinks ginger tea in the cold winter. <br />
            Passionate about photography, webdesign and country music. <br />
            Interested in languages, travel and camping life. <br />
            Love Thai food and fotball⚽. 
          </p>
        </div>

        <div className="home-image"> 
            <img src= {Camper} alt="solo female camper" />    
        </div>  

      </div>
    </div>
  
  )
}

export default Home
