'use client'

import React, { useState } from 'react'
import ReviewList from './ReviewList'
import SpinnerEffect from './SpinnerEffect'

const ReviewListWithLoader = ({cafeName}) => {
  const [isLoading, setIsLoading] = useState(true)

  const handleDataLoader = () =>{
    setIsLoading(false)
  }
  return (
    <div>

    {isLoading && 
    <SpinnerEffect/>
    
    }

    <ReviewList cafeName = {cafeName} handleDataLoader = {handleDataLoader}/>
    </div>
  )
}

export default ReviewListWithLoader
