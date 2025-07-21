import React from 'react'
import { Link, useParams, useSearchParams } from 'react-router'

function ProductDescription() {
    const searchParams = useSearchParams()
    const params = useParams();
  return (
    <div className='p-5'>
          Products - {params.category}  - {searchParams.length('device')}
    
          <br/>
    
          <Link to={"/"} className='underline text-blue-700' > Go to Home</Link>
        </div>
  )
}

export default ProductDescription
