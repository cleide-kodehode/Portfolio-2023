
import React from 'react';
import { FaLinkedin, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import "../styles/Footer.css";



function Footer() {
  return (
    <div className="footer"> 
        <div className="socialMedia">
            <FaLinkedin /> 
            <FaGithub /> 
            <FaGoogle /> 
            <FaInstagram /> 
            <FaTwitter />
        </div>        
        <p>Copyright {new Date().getFullYear()} Cleide Florisbella. All Rights Reserved. </p>
    </div>
  );
}

export default Footer
