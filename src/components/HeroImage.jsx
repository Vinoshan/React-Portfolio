import "./HeroImageStyles.css";
import React from 'react';
import IntroImg from "../assets/bg-img.jpg";
import { Link } from "react-router-dom";

const HeroImage = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="intro-img" src={IntroImg} alt="IntroImg" />
      </div>

      <div className="content">
        <p>HI, I'M A FREELANCER</p>
        <h1>Full-Stack Web Developer</h1>
        <div>
          <Link to="/project" className="btn">Projects</Link>
          <Link to="/contact" className="btn btn-light">Contact</Link>
        </div>
      </div>
    </div>


  );
};

export default HeroImage;
