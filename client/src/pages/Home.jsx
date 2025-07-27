import React from 'react'
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import AItools from '../components/Aitools';
import Testimonial from '../components/Testimonial';
import Plan from '../components/Plan';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <Navbar/>
      <Hero/>
      <AItools/>
      <Testimonial/>
      <Plan/>
      <Footer/>
    </>
  )
}

export default Home;
