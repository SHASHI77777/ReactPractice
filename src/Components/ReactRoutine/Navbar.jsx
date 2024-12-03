import React from 'react'
import './Navbar.css' 
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <>
        <div className='Navbar'>
            <ul>
                <li><NavLink to="/">Home</NavLink> </li>
                <li><NavLink to="/about">About</NavLink> </li>
                <li><NavLink to="/blog">Blog</NavLink> </li>
                <li><NavLink to="/contact">Contact </NavLink> </li>
            </ul>
        </div>
    </>
  )
}

export default Navbar