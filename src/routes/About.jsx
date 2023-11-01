import React from 'react'
import Navbar from '../components/Navbar'
import HeroImage2 from '../components/HeroImage2'
import Footer from '../components/Footer'

const About = () => {
  return (
    <div>
      <Navbar />
      <HeroImage2 heading="About." text="I'm a problem solver, passionate about finding solutions" />
      <Footer />
    </div>
  )
}

export default About
