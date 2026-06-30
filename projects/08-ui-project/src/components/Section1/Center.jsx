import React from 'react'
import CenterLeft from './CenterLeft'
import CenterRight from './CenterRight'

const Center = (props) => {
  return (
    <div className='py-15 px-16 flex gap-20 items-center justify-between h-[90vh]'>
      <CenterLeft/>
      <CenterRight users={props.users} />
    </div>
  )
}

export default Center 
