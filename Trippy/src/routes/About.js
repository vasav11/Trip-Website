import React from 'react'
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutImg from "../assests/night.jpg";
import Footer from '../components/Footer';
import AboutUs from './AboutUs';
function About() {
  return (
    <>

      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={AboutImg}
        title="About"
        btnClass="hide"
      />
      <AboutUs/>
       <Footer/>
    </>

  )
}
export default About;