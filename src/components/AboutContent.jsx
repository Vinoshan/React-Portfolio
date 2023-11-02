import { Link } from "react-router-dom"
import "./AboutContentStyles.css"
import React from 'react'

function AboutContent() {
  return (
    <div className="about">
      <div className="left">
        <h1>Who am I?</h1>
        <p>I am a MERN developer. I create responsive websites and backend servers for my clients.</p>
        <Link to="/contact"><button className="btn">Get in touch</button></Link>
      </div>

      <div className="right">
        <div className="img-container">

          <div className="img-stack top">
            <img src="https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?auto=format&fit=crop&q=80&w=1170&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="React" className="img" />
          </div>

          <div className="img-stack bottom">
            <img src="https://images.unsplash.com/photo-1566837945700-30057527ade0?auto=format&fit=crop&q=80&w=1170&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="React" className="img" />
          </div>
        </div>
      </div>

    </div>
  )
}

export default AboutContent
