import React from 'react'
import { useNavigate } from 'react-router-dom'

const Courses = () => {
    const navigate = useNavigate();
    const btnClicked = ()=>{
        navigate('/')
    }

    const btnClick = ()=>[
        navigate(-1)
    ]
  return (
    <div>
        <button onClick={btnClicked}  className='bg-emerald-800 px-4 py-2 m-4 rounded active:scale-95 cursor-pointer'>
            Get Back To Home
        </button>
        <button onClick={btnClick}  className='bg-emerald-800 px-4 py-2 m-4 rounded active:scale-95 cursor-pointer'>
            Back
        </button>
      <h1>Buy Your Course</h1>
    </div>
  )
}

export default Courses
