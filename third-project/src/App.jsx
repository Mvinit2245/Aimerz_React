import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [quote, setQuote] = useState('')

  async function fetcheQuote() {
    const response = await axios.get('https://dummyjson.com/quotes/random' )
    console.log(response.data.quote);
    setQuote(response.data.quote)
  }

 useEffect(() =>{
  fetcheQuote();
 } ,[])
  
  return (
        <div className='p-5'>
          <h1 className='text-3xl text-center mb-5'>Random Quote Generator </h1>
          <p>{quote ? quote : 'Loading'}</p>
          </div>
      
  )
}

export default App
