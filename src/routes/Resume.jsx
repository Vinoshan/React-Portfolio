import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImage2 from '../components/HeroImage2'
import Skills from '../components/Skills'

const Project = () => {
  return (
    <div>
      <Navbar />
      <HeroImage2 heading="Resume." text="List of my Skills" />
      <Skills />
      <Footer />
    </div>
  )
}

export default Project
