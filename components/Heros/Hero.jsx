import React from 'react'
import './Hero.css'
import arrow from '../../assets/images/arrow-right-solid.svg'


const Hero = () => {
  return (
    <div className='hero container'>
      <div className='hero-text'>
          <h1>Welcome to Seyi Adisa’s official website.</h1>
          <p>As a global leader in governance and leadership, Seyi is dedicated to creating transformative platforms for the development of individuals, communities, nations, and the continent through the power of strategic collaboration and visionary leadership.</p>
          <button className='btn'>Learn More  <img src={arrow} alt="" /></button>
      </div>
    </div>
  )
}

export default Hero
