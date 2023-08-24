import React from 'react'
import './Sidebar.css'
import Logo from '../logo/Logo'


const Sidebar = () => {
  return (
    <nav className='sidebar'>
        <Logo />

        <div className="buttonShowMenu">
            arrow
        </div>

        <ul className="menuNav">
            <li className="menuItem">
                <a href="#home" className="navItem">Home</a>
            </li>
            <li className="menuItem">
                <a href="#about" className="navItem">About</a>
            </li>
            <li className="menuItem">
                <a href="#skills" className="navItem">Skills</a>
            </li>
            <li className="menuItem">
                <a href="#portfolio" className="navItem">Portfolio</a>
            </li>
            <li className="menuItem">
                <a href="#contact" className="navItem">Contact</a>
            </li>
        </ul>

        <div className="social-media">
            <h4>Follow me</h4>
            <div className="social-items">
            
            </div>
            <span>&copy; 2023 All Rights Reserved</span>
        </div>
    </nav>
  )
}

export default Sidebar