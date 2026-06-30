import React from 'react'

const RightCardContent = (props) => {
  return (

        <div className='absolute top-0 left-0 h-full w-full p-6 flex flex-col justify-between'>
                        <h2 className='bg-white flex rounded-full justify-center h-10 w-10 items-center font-semibold text-2xl'>{props.id+1}</h2>
                <div>
                <p className='text-xl leading-normal text-white mb-15'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita accusamus at impedit esse omnis excepturi.</p>
                <div className='flex justify-between'>
                    <button className='bg-blue-500 rounded-full text-white px-8 py-2 font-medium'>{props.tag}</button>
                    <button className='bg-blue-500 rounded-full text-white font-semibold px-3 py-2'><i className="ri-arrow-right-line"></i></button>
                </div>
            </div>
        </div>
  )
}

export default RightCardContent
