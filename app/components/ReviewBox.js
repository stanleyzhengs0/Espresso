
import React from 'react'

const ReviewBox = (props) => {
  return (
    <div className='flex w-full p-8 rounded-3xl bg-stone-400 gap-10
    '>
      <div alt="reviewProfile">
        {props.reviewerName}
      </div>
      <div alt ="reviewDescription"> 
        {props.description}
      </div>
    </div>
  )
}

export default ReviewBox
