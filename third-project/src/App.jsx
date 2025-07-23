import axios from 'axios'
import React, { useState } from 'react'
//import { useEffect, useState, useQuery } from 'react'
import './App.css'
//import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query';

import { useForm } from "react-hook-form"
import { ToastContainer, toast } from 'react-toastify';

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
  // Example of React Hook Form
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

        const onSubmit = (data)=> {
        //data.preventDefault();
        console.log(data)
       toast('Form submitted Successfully')
       toast.success('Form submitted Successfully')
       toast.info('Form submitted Successfully')
       toast.warning('Form submitted Successfully')
       toast.error('Form submitted Successfully')
        }

  // Step 1: Create state variables for each input field
  // const [userData, setUserData] = useState({
  //         name:'',
  //         email:'',
  //         contact:''
  //  });

  // Step 2: Handle input changes
  // const handleNameChange = (event) =>
  //   setName(event.target.value);
  // const handleEmailChange = (event) =>
  //   setEmail(event.target.value);
  // const handleConatctChange = (event) =>
  //   setContact(event.target.value);

  // Step 3: Handle form submission
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (userData.contact.length !== 10) {
  //     alert('Please enter a valid phone number !!!')
  //     return
  //   }
  //   console.log(`Form Submitted \nName: ${userData.name}  \nEmail: ${userData.email}  \nConatctNo: ${userData.contact}`);
  // }
  // // const [quote, setQuote] = useState('')
  // const queryClient = new QueryClient();



  //  useEffect(() =>{
  //   fetcheQuote();
  //  } ,[])

  return (

    //     <form onSubmit={handleSubmit}>
    //       <div className='container'>
    //         <div>
    //           <label  htmlFor="name">Name : </label>
    //           <input type='text' value={userData.name} onChange={(e)=>{setUserData({...userData, name:
    // e.target.value})}} placeholder='Enter your name' />
    //         </div>

    //         <div>
    //           <label htmlFor="email">Email : </label>
    //           <input type='email' value={userData.email} onChange={(e)=>{setUserData({...userData, email:
    // e.target.value})}} placeholder='Enter your EmailID' />
    //         </div>

    //         <div>
    //           <label  htmlFor="contact">Contact : </label>
    //           <input type='tel' value={userData.contact} onChange={(e)=>{setUserData({...userData, contact:
    // e.target.value})}} placeholder='Enter your Contact NO' />
    //         </div>
    //         <button type="submit"> Submit </button>

    //       </div>
    //     </form>
    // <div className='p-5'>
    //   <h1 className='text-3xl text-center mb-5'>Random Quote Generator </h1>
    //   {/* <p>{quote ? quote : 'Loading'}</p> */}

    //   <QueryClientProvider client={queryClient}>
    //     <Quote />
    //   </QueryClientProvider>
    // </div>

    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="space-y-12">
        <div className="sm:col-span-4">

          <label className="block text-sm/6 font-medium text-gray-900">Name : </label>
          
          <input type='text' id='name'className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6" name='name' {...register('name')}/>
        </div>

        <div>
          <label>Email : </label>
          <input type='email' id='email' name='email' {...register('email', {required: 'Email is compulsory...'})}/>
          {errors.email && <p>{errors.email.message}</p>}
        </div>

        <div>
          <label>Contact : </label>
          <input type='tel' id='contact' name='contact' {...register('contact')}/>
        </div>

        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Submit</button>
         <ToastContainer />
      </div>
    </form>
  )
}

export default App
