import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className="nav">
      <h3>Shivam</h3>
      <div>
       {/*  <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a> -> this makes browser reload, so instead of using these react browser provides link tag for it*/}
        <Link to='/'>Home</Link>
        <Link to='/about'>About Us</Link>
        <Link to='/contact'>Contact Us</Link>
      </div>
    </div>
  )
}

export default Navbar
