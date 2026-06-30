import React from 'react'
import RightCard from './RightCard'

const CenterRight = (props) => {
  return (
    <div id='right' className='h-full w-2/3  p-6 flex items-center justify-between flex-nowrap overflow-x-auto shrink-0'>
      {props.users.map(function(elm,idx){
        return <RightCard key={idx} id={idx} img={elm.img} tag = {elm.tag}/>
      })}
    </div>
  )
}

export default CenterRight
