import React from 'react'
import { Link } from 'react-router'

function Home() {
  return (
    <div className='p-5'> Home

      <br/>

      <Link className='underline text-amber-700' to={'/Products'}> Go to products</Link>
      <br/>

      <Link className='underline text-amber-700' to={'/Products/mobiles'}> Go to Mobiles</Link>
      <br/>

      <Link className='underline text-amber-700' to={'/Products/laptops'}> Go to Laptops</Link>
      <br/>

       <Link className='underline text-amber-700' to={'/Products/tvs'}> Go to TV's</Link>
      <br/>

      
    </div>
  )
}

export default Home
 