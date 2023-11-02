import React from 'react'
import "./SkillsStyles.css"

const Skills = () => {
  return (
    <div className="skill">
      <div className="left">
        <h3>Front-End Skills</h3>
        <ol>
          <li>HTML</li>
          <li>CSS</li>
          <li>Javascript</li>
          <li>jQuery</li>
          <li>Responsive Design</li>
          <li>React</li>
          <li>BootStrap</li>
        </ol></div>

      <div className="right">
        <h3>Back-End Skills</h3>
        <ol>
          <li>APIs</li>
          <li>Node</li>
          <li>Express</li>
          <li>MySQL, Sequelize</li>
          <li>MongoDB, Mongoose</li>
          <li>REST</li>
          <li>GraphQL</li>
        </ol>
      </div>
    </div>
  )
}

export default Skills
