
import React from 'react'
import "../styles/Home.css";
import Camper from "../img/camper.png";


function Home() {
  return (
    <main className="home-main">
      <h2> Hey there!<span role="img" aria-label="Grinning Face"> &#128512;</span> </h2>
      <img src= {Camper} className="home-img"  alt="solo female camper" />
      <h1> I'm Cleide Florisbella</h1>
      <p> Passionate about photography, webdesign & country music...   
          In an ongoing love story with ReactJs...      
          Interested in languages, travel and camping life...         
          Love Thai food and football <span role="img" aria-label="Soccer Ball"> &#9917;</span> 
      </p>
    </main>
  )
}

export default Home
