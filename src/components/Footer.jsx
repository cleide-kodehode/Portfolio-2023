
import React from 'react';
import { FaLinkedin, FaGithub, FaGoogle } from "react-icons/fa";
import "../styles/Footer.css";


function Footer() {
  return (
    <footer>     
      <div className="footer">   
        <div className="socialMedia">
        <FaLinkedin className="footerIcon1"/>
        <FaGithub className="footerIcon2" />
        <FaGoogle className="footerIcon3" />
        </div>            
        <p> Copyright  {new Date().getFullYear()} Cleide Florisbella. All Rights Reserved. </p>     
        </div>
      
    </footer>    
  );
}

export default Footer
