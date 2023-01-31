import React from 'react'



function ProjectItem({image, name}) {
  return (  
    
    <div className="projectItem"> 
      <div style={{ backgroundImage: `url(${image})` }} className="bgImage" />
      <div> {name} </div>
      </div>
  )
}

export default ProjectItem
