import React from 'react'
import Hero from "../components/Hero/Carousel"
import AboutUs from '../components/AboutUs/AboutUs'
import BestDeal from '../components/BestDeal/BestDeal'
import Map from '../components/Map/Map'

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <AboutUs></AboutUs>
      <BestDeal></BestDeal>
      <Map></Map>
    </div>
  )
}

export default Home
