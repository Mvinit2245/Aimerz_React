import axios from 'axios'
import React, { useState } from 'react'
//import { useEffect, useState, useQuery } from 'react'
import './App.css'
//import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query';

// function Quote() {
//   async function fetcheQuote() {
//     try {
//       const response = await axios({
//         method: "GET",
//         url: "https://dummyjson.com/quotes/random",
//       });
//       return response.data.quote;
//     } catch (err) {
//       console.log(err);
//     }

//   }

//   const { data, isLoading, error } = useQuery({
//     queryKey: ['quote'],
//     queryFn: fetcheQuote,
//   });
//   // if (isLoading) return <p>Loading...</p>;
//   // if (error) return <p>Error loading quote</p>;

//   return <p>{isLoading ? 'Loading' : data}</p>;
// }

function App() {

  // Step 1: Create state variables for each input field
  const [userData, setUserData] = useState({
          name:'',
          email:'',
          contact:''
   });

  // Step 2: Handle input changes
  // const handleNameChange = (event) =>
  //   setName(event.target.value);
  // const handleEmailChange = (event) =>
  //   setEmail(event.target.value);
  // const handleConatctChange = (event) =>
  //   setContact(event.target.value);

  // Step 3: Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (userData.contact.length !== 10) {
      alert('Please enter a valid phone number !!!')
      return
    }
    console.log(`Form Submitted \nName: ${userData.name}  \nEmail: ${userData.email}  \nConatctNo: ${userData.contact}`);
  }
  // // const [quote, setQuote] = useState('')
  // const queryClient = new QueryClient();



  //  useEffect(() =>{
  //   fetcheQuote();
  //  } ,[])

  return (

    <form onSubmit={handleSubmit}>
      <div className='container'>
        <div>
          <label  htmlFor="name">Name : </label>
          <input type='text' value={userData.name} onChange={(e)=>{setUserData({...userData, name:
e.target.value})}} placeholder='Enter your name' />
        </div>

        <div>
          <label htmlFor="email">Email : </label>
          <input type='email' value={userData.email} onChange={(e)=>{setUserData({...userData, email:
e.target.value})}} placeholder='Enter your EmailID' />
        </div>

        <div>
          <label  htmlFor="contact">Contact : </label>
          <input type='tel' value={userData.contact} onChange={(e)=>{setUserData({...userData, contact:
e.target.value})}} placeholder='Enter your Contact NO' />
        </div>
        <button type="submit"> Submit </button>

      </div>
    </form>
    // <div className='p-5'>
    //   <h1 className='text-3xl text-center mb-5'>Random Quote Generator </h1>
    //   {/* <p>{quote ? quote : 'Loading'}</p> */}

    //   <QueryClientProvider client={queryClient}>
    //     <Quote />
    //   </QueryClientProvider>
    // </div>

  )
}

export default App
