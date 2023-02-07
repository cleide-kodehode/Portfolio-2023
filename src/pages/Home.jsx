
import React from 'react'
import "../styles/Home.css";
import Camper from "../img/camper.png";


function Home() {
  return (
    <main>
      <h2> Hey there!<span role="img" aria-label="Grinning Face"> &#128512;</span> </h2>
      <h1> I'm Cleide Florisbella</h1>
      <p>
         Passionate about photography, webdesign and country music. <br /> 
         Interested in languages, travel and camping life. <br />
         A juice lover who drinks ginger tea in the cold winter. <br />
         Love Thai food and fotball⚽. 
      </p>
          <img src= {Camper} className="home_img"  alt="solo female camper" />
    </main>
  )
}

export default Home
