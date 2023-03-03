
import React, { useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import "../styles/Navbar.css";
import { useState } from "react";
import Logo from '../img/logo..png';
import {MdOutlineReorder} from "react-icons/md";


function Navbar() {
  const navigate=useNavigate();

    const [expandNavbar, setExpandNavbar] = useState(false);

    const location = useLocation();

    useEffect (() => {
      setExpandNavbar(false)
    }, [location]);

  function goHome(){
    navigate("/");
  }
   
  
  return (  
    <div className="navbar" id={expandNavbar ? "open" : "close"}>
      <div className="toggleButton">
        <button onClick= {() => {
          setExpandNavbar((prev) => !prev);
          }}>
          <MdOutlineReorder /></button>
      </div>

      <div className="navbar-logo">
        <img src={Logo} alt="project logo" onClick={goHome} />
      </div>

      <nav className="links">
        <Link to= "/"> Home </Link> 
        <Link to= "/about"> About </Link> 
        <Link to= "/projects"> Projects </Link>  
        <Link to= "/contact"> Contact </Link>        
      </nav>      
    </div>
  );
}

export default Navbar
