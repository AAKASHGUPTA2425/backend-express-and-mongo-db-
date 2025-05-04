import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import axios from 'axios'
function App() {
  const [lists, setlists] = useState([])
  useEffect(() => {
    axios.get('/api/lists')
      .then((response) => {
        setlists(response.data)
      })
      .catch((error) => {
        console.log(error);
      })
  })
  return (
    <>
       <h1>fullstack work</h1>
      <p>lists:{lists.length}</p>
      
       {lists.map((list) => (
        <div key={list.id}>
          <h3>{list.name}</h3>
          <p>{list.branch}</p>
        </div>
      ))}  
     
    </>
  )
}

export default App
