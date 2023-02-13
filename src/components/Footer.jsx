
import React from 'react';
import { FaLinkedin, FaGithub } from "react-icons/fa";
import "../styles/Footer.css";


function Footer() {
  return (
    < footer className="footer">              
      <div className="socialMedia">
        <a href="https://www.linkedin.com/in/cleide-florisbella/"> 
        <FaLinkedin className="footerIcon1 footerIcon"/>
        <FaGithub className="footerIcon2 footerIcon" /> 
        </a>
      </div>            
        <p> Copyright {new Date().getFullYear()} Cleide Florisbella. All Rights Reserved. </p>           
      </footer>    
  );
}

export default Footer
