import axios from 'axios'
//import { useEffect, useState, useQuery } from 'react'
import './App.css'
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query';

function Quote() {
  async function fetcheQuote() {
    try {
      const response = await axios({
        method: "GET",
        url: "https://dummyjson.com/quotes/random",
      });
      return response.data.quote;
    } catch (err) {
      console.log(err);
    }

  }

  const { data, isLoading, error } = useQuery({
    queryKey: ['quote'],
    queryFn: fetcheQuote,
  });
  // if (isLoading) return <p>Loading...</p>;
  // if (error) return <p>Error loading quote</p>;

  return <p>{isLoading ? 'Loading' : data}</p>;
}

function App() {
  // const [quote, setQuote] = useState('')
  const queryClient = new QueryClient();



  //  useEffect(() =>{
  //   fetcheQuote();
  //  } ,[])

  return (
    <div className='p-5'>
      <h1 className='text-3xl text-center mb-5'>Random Quote Generator </h1>
      {/* <p>{quote ? quote : 'Loading'}</p> */}

      <QueryClientProvider client={queryClient}>
        <Quote />
      </QueryClientProvider>
    </div>

  )
}

export default App
