import React from 'react'
import Hero from '../Components/HeroContainer/Hero'
import "./Home.css"
import MidContainer from '../Components/MidContainer/MidContainer'
import BottomContainer from '../Components/BottomContainer/BottomContainer'
import Footer from '../Components/Footer/Footer'

const Home = () => {
  return (
    <div className='home-page-container w-full '>
      <Hero/>
      <MidContainer/>
      <BottomContainer/>
      <Footer/>
    </div>
  )
}

export default Home
