import React from 'react'

const ReviewCarousel  = ({imageUrls}) => {

  return (
    <div className='flex'>

      <div className='flex h-full w-full  '>
        {imageUrls.map(url =>(
          <img
              key = {url}
              src= {url}
              className='bg-cover w-full h-full block'
          />
        ))}
      </div>
      
    </div>
  )
}

export default ReviewCarousel 
