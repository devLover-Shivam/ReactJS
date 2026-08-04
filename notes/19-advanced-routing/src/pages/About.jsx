import React from 'react'
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
      <h1>About Us</h1>
    </div>
  )
}

export default Product
