import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
const Product = () => {
    const navigate = useNavigate()
    const btnClicked = ()=>{
       navigate('/');
    }
    const btnClick = ()=>{
        navigate(-1);
    }
  return (
    <div>
        <button onClick={btnClicked} className='bg-emerald-800 px-5 py-2 rounded active:scale-95 m-4 cursor-pointer'>Get Back To Home</button>

        <button onClick={btnClick} className='bg-emerald-800 px-5 py-2 rounded active:scale-95 m-4 cursor-pointer'>Back</button>

        <div className='flex justify-center gap-10 py-4'>
            <Link className='text-xl font-semibold' to='/product/men'>Men</Link>
            <Link className='text-xl font-semibold' to='/product/women'>Women</Link>
            <Link className='text-xl font-semibold' to='/product/kids'>Kids</Link>
            <Outlet/>
        </div>
    </div>
  )
}

export default Product
