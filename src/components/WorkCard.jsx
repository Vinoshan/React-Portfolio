import { NavLink } from "react-router-dom";
import "./WorkCardStyles.css";

import React from 'react'

function WorkCard(props) {
  return (
    <div className="project-card">
      <img src={props.imgsrc} alt={props.imgalt} />
      <h2 className="project-title">{props.title}</h2>

      <div className="pro-desc">
        <p>{props.desc}</p>
      </div>

      <div className="pro-btns">
        <NavLink to={props.view} className="btn" target="_blank">View</NavLink>

        <NavLink to={props.source} className="btn btn-light" target="_blank">Source</NavLink>
      </div>

    </div>
  )
}

export default WorkCard
