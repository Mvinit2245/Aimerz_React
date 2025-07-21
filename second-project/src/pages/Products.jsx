import React from 'react'
import { Link, useParams, useSearchParams } from 'react-router'

function Products() {
    const params = useParams();
    const [searchParams] = useSearchParams()
   
    
  return (
    <div className='p-5'>
      Products - {params.category}  {searchParams.get('device') && searchParams.get('device') } 

      <br/>

      <Link to={"/"} className='underline text-blue-700' > Go to Home</Link>
      <br/>

      {
        params.category === 'mobiles' && <Link to={"/products/mobiles?device=iphone"} className='underline text-blue-700'>
            Go to iphones
        </Link>
      }
    </div>
  )
}

export default Products
