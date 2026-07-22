import React from 'react'
import axios from 'axios';
import { useState } from 'react';


const App = () => {
  async function getData(){
      const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
      console.log(response);
  }
  const getAnotherData = async()=>{
      const resp  = await fetch('https://jsonplaceholder.typicode.com/todos/1');
      console.log(resp);
      const data = await resp.json();
      console.log(data);
  }

  async function getDataUsingAxios(){
    const response  = await axios.get('https://jsonplaceholder.typicode.com/users');
    console.log(response.data);
  }

  const [data, setData]  = useState([]);

  const getData2 = async () => {
    const response = await axios.get('https://picsum.photos/v2/list')
    setData(response.data)
  }




  return (
    
    <div>
      {/* <button onClick={getData}>Get Data</button> */}
      {/* <button onClick={getAnotherData}>Get Data</button> */}
      {/* <button onClick={getDataUsingAxios}>Get Data</button> */}
      <button onClick={getData2}>Get Data</button>

      <div>
         {data.map(function(elm,idx){
          return <h3>Hello {idx+1}</h3>
         })}
      </div>
    </div>
  )
}

export default App
