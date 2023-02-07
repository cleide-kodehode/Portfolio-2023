
import React from 'react';
import { FaLinkedin, FaGithub, FaGoogle } from "react-icons/fa";
import "../styles/Footer.css";


function Footer() {
  return (
    < footer className="footer">              
        <div className="socialMedia">
        <FaLinkedin className="footerIcon1 footerIcon"/>
        <FaGithub className="footerIcon2 footerIcon" />
        <FaGoogle className="footerIcon3 footerIcon" />
        </div>            
        <p> Copyright {new Date().getFullYear()} Cleide Florisbella. All Rights Reserved. </p>   
        
      </footer>    
  );
}

export default Footer
