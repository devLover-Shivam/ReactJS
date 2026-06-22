import React from 'react'
import Card from './components/Card'
import Navbar from './components/Navbar'
const App = () => {
  return (
    <div>
      {/* {Card()}
      {Card()} */}
      <Navbar/>
      <Card />
      <Card />
      {/* till now we repeated the same card with same data but now we want our content to be dynamic.and we do that using PROPS.*/}
      

    </div>

  )
}

export default App
