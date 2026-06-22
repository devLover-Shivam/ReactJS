import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className='parent'>
      <Card user = 'Shivam' age={22} img='https://i.pinimg.com/736x/5d/69/b1/5d69b14985a03196eee28e981fbf6866.jpg'/>
      <Card user = 'Shailendra' age={23} img='https://i.pinimg.com/736x/d8/dd/a8/d8dda8e33b6014f8993972f9dc77e59f.jpg'/>
      <Card user = 'Sushant' age={22} img='https://i.pinimg.com/736x/09/d1/22/09d1226d0f5c7814cefeb27906cdb9e1.jpg'/>
      {/* Data is always sent from parent to child and not from child to data. for eg:- a parent named 'app' can send data to a child named 'card' but vice versa isn't possible. YOU CAN MOVE FROM TOP TO DOWN AND NOT FROM DOWN TO TOP.*/}

    </div>
  )
}

export default App
