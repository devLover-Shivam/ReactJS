import React from 'react'
import { createContext } from 'react'

export const ThemeDataContext = createContext();
const ThemeContext = (props) => {
  return (
    <div>
      <ThemeDataContext.Provider value={'Shivam'}>
        {props.children}
      </ThemeDataContext.Provider>
    </div>
  )
}

export default ThemeContext
