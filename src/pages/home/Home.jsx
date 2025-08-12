import React from 'react'
import Nav from '../../components/nav/Nav'
import bg from '../../assets/bg0.gif'
import './home.css'

function home() {
  return (
    <div className='home'> 
      <div className="hero-bg">
        <img src={bg} alt="" />
      </div>
    </div>
  )
}

export default home