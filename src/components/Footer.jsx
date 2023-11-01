import "./FooterStyles.css";
import React from 'react'

import { FaPhone, FaMailBulk, FaLinkedin, FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">

          <div className="phone">
            <h4><FaPhone size={20} style={{ color: "#fff", marginRight: "2rem" }} />
              1+ 905-452-2368 </h4>
          </div>

          <div className="email">
            <h4><FaMailBulk size={20} style={{ color: "#fff", marginRight: "2rem" }} />
              vinoshan@outlook.com</h4>
          </div>

        </div>

        <div className="right">
          <div className="social">
            <h4>
              <h3>My Socials</h3>
              <FaLinkedin size={30} style={{ color: "#fff", marginRight: "2rem" }} />

              <FaGithub size={30} style={{ color: "#fff", marginRight: "2rem" }} />
            </h4>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
