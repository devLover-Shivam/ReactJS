import React from 'react'
import Navbar from './components/Navbar'
import Nav2 from './components/Nav2'
import { useState } from 'react';

const App = () => {
  const [theme,setTheme] = useState('light');

  return (
    <div>
      <Navbar theme = {theme}/>
    </div>
  )
}

export default App
