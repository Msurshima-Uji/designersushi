import React from 'react'
import './navbar.css'

const Navbar = () => {
  return (
    <div>
        <div className="navbar">
            <ul className="menu">
                <p>SushiTechSpace</p>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#works">Works</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar