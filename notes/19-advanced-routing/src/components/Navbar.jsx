import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='flex justify-between py-4 px-8 bg-cyan-800'>
      <h2 className='text-xl font-bold'>RECODE</h2>
      <div className='flex gap-8'>
            <Link className='text-xl font-bold' to="/">Home</Link>
            <Link className='text-xl font-bold' to="/about">About</Link>
            <Link className='text-xl font-bold' to="/product">Products</Link>
            <Link className='text-xl font-bold' to="/courses">Courses</Link>

      </div>
    </div>
  )
}

export default Navbar
