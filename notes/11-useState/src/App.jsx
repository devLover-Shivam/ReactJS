import React, { useState } from 'react'

const App = () => {

  var[num,setNum] = useState(0);
  function increaseNum(){
    setNum(num+1);
  }
  function decreaseNum(){
    setNum(num-1);
  }
  function jumpNum(){
    setNum(num+5);
  }
  return (
    <div>
      <h1>{num}</h1>
      <div className='btn'>
      <button onClick={increaseNum}>Increase</button>
      <button onClick={decreaseNum}>Decrease</button>
      <button onClick={jumpNum}>Jump By 5</button>
      </div>
    </div>
  )
}

export default App
