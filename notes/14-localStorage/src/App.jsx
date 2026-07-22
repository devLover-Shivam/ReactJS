import React from 'react'

const App = () => {
  localStorage.setItem('user','shivam');
  const user = localStorage.getItem('user');
  console.log(user)
  localStorage.removeItem('user');

  //while storing anything in the form of key value pair inside the localstorage the value should always be in the form of string. following is the example for that:-

  const user1 = {
    username: 'shivam',
    age: 21,
    city: 'deoghar'
  }
  //here the value assosciated with the key 'user' is an object and not a string. so if we run it on the console in the values section we'll see an object.
  /* localStorage.setItem('user',user1); */
  // we need to convert this into a string using JSON.stringify
  localStorage.setItem('user',JSON.stringify(user1));


  return (
    <div>
      App
    </div>
  )
}

export default App
