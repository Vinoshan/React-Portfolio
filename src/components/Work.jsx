import { NavLink } from "react-router-dom";
import "./WorkCardStyles.css";
import WorkCard from "./WorkCard";
import WorkCardData from "./WorkCardData";

import React from 'react'

function Work() {
  return (
    <div className="work-container">
      <h1 className="project-heading">Projects</h1>
      <div className="project-container">
        {WorkCardData.map((val, index) => {
          return (
            <WorkCard
              key={index}
              imgsrc={val.imgsrc}
              imgalt={val.imgalt}
              title={val.title}
              desc={val.desc}
              view={val.view}
              source={val.source}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Work;
