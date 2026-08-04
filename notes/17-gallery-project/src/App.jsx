import React, { useEffect, useEffectEvent } from 'react'
import axios from 'axios';
import { useState } from "react";
const App = () => {
  const [userData,setUserData] = useState([]);
  const [index,setIndex] = useState(1);
  const getData=async () =>{
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=21`);
    setUserData(response.data);
    console.log(response.data)
  }

  useEffect(function(){
    getData()
  },[index])
  let printUserData = <h3 className='text-gray-500 text-xs absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-semibold'>Loading...</h3>;
  if(userData.length>0){
    printUserData = userData.map(function(elem,idx){
      return <div key={idx}>
       <a href={elem.url} target='_blank'>
           <div className='h-40 w-44 bg-white rounded-xl overflow-hidden' >
          <img className='h-full object-cover w-full' src={elem.download_url} alt="" />
            </div>
          <h2 className='font-bold text-sm text-center p-3'>{elem.author}</h2>

       </a>
      </div>
    })
  }
  
  return (
    <div className='p-4 bg-black h-screen overflow-auto text-white'>
      

      <div className = 'flex flex-wrap gap-10'>
        {printUserData}
      </div> 

      <div className='flex justify-center gap-6 items-center p-4'>
        <button className='cursor-pointer active:scale-90 bg-amber-400 text-black rounded px-4 py-2 font-bold'
        onClick={()=>{
          if(index>1){
            setIndex(index-1);
          }
        }}
        >
          Prev
          </button>
        <h4 className='cursor-pointer active:scale-90  bg-amber-400 text-black rounded px-4 py-2 font-bold'>Page {index}</h4>

        <button className='cursor-pointer active:scale-90  bg-amber-400 text-black rounded px-4 py-2 font-bold'
        onClick={()=>{
          setIndex(index+1);
        }}
        >
          Next
          </button>
      </div>
    </div>
  )
}

export default App
