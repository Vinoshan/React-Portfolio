import { Link } from "react-router-dom";
import "./NavbarStyles.css";

import React, { useState } from 'react'
import { FaBars, FaTimes } from "react-icons/fa";


const Navbar = () => {
  // useState hook to toggle hamburger menu
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  // useState hook to change navbar background color on scroll
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    }

    else {
      setColor(false);
    }
  };

  // Add event listener to window
  window.addEventListener("scroll", changeColor);

  return (
    <div className={color ? "header header-bg" : "header"}>
      <Link to="/"><h1>Portfolio</h1></Link>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/about">About</Link>
        </li>

        <li>
          <Link to="/project">Project</Link>
        </li>

        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <div className="hamburger">
        {click ? (
          <FaTimes size={20} style={{ color: "#fff" }} onClick={handleClick} />
        ) : (
          <FaBars size={20} style={{ color: "#fff" }} onClick={handleClick} />
        )}
      </div>
    </div>
  )
}

export default Navbar
