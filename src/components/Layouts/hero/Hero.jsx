import React from 'react'
import Sidebar from '../../sidebar/Sidebar'
import './Hero.css'


const Hero = () => {
  return (
    <section className='hero'>
      <Sidebar />
      <h1>Hello Hero World!</h1>
    </section>
  )
}

export default Hero