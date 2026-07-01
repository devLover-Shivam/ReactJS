import React from 'react'

const App = () => {
  function btnClicked(){
    console.log("Button Clicked")
  }
  function mouseEnter(){
    console.log("Mouse Entered")
  }

  function userType(){
    console.log("User is Typing")
  }

  const pageScrolling = (elm)=>{
    if(elm>0){
      console.log('Seedha Scrooling');
    }else{
      console.log('Ulta Scrolling');
    }
  }
  return (
    <div onWheel={(elm)=>{
      //console.log(elm)
      pageScrolling(elm.deltaY)
      }}>
      {/* <h1>Hey, Shivam</h1>
      <button onMouseEnter={mouseEnter} onClick={btnClicked}>Change User</button> */}

      <input onChange={userType/* ()=>{
        console.log("Input par click hua hai")
      } */} type="text" placeholder='Enter Text' />
      <div className='page1'></div>
      <div className='page2'></div>
      <div className='page3'></div>

    </div>
  )
}

export default App
