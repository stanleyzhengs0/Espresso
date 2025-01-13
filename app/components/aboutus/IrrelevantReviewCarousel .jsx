'use client'
import React from 'react'
import { FaAngleRight } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa";
import { useState } from 'react';

const ReviewCarousel  = ({imageUrls}) => {

  const [imageIndex, setImageIndex] = useState(0)

  function showNextImage(){
    setImageIndex(index => {
      if (index == imageUrls.length - 1) return 0
      return index + 1 
      }
    )
  }

  function showPrevImage(){
    setImageIndex(index => {
      if(index == 0) return imageUrls.length - 1
      return index - 1
    })
  }

  return (
    // Container
    <div className='relative group'>

      {/* Image content for carousel */}
      <div className='flex h-full w-full overflow-hidden'>
        {imageUrls.map(url =>(
          <img
              key = {url}
              src= {url}
              className='bg-cover w-full block shrink-0 grow-0 transition-transform ease-in-out duration-500 '
              style = {{
                transform: `translateX(-${100 * imageIndex}%)`
              }}
          />
        ))}
      </div>

      {/* Navigation button  */}
      <button 
        onClick={showPrevImage}
        className='hidden group-hover:flex justify-center items-center bg-grey bg-opacity-15 absolute top-1/2 -translate-y-1/2 left-0 p-1 h-20 rounded-r-xl' >
          <FaAngleLeft />
      </button>
      <button 
        onClick={showNextImage}
        className='hidden group-hover:flex justify-center items-center bg-grey bg-opacity-15 absolute top-1/2 -translate-y-1/2 right-0 p-1 h-20 rounded-l-xl'>
          <FaAngleRight />
      </button>

    </div>
  )
}

export default ReviewCarousel 
