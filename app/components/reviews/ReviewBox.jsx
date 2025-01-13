
import React from 'react'
import StarRating from './StarRating'

const ReviewBox = (props) => {
  return (
   
    <div className="flex flex-col flex-grow justify-center items-center bg-beige h-full p-4 rounded-2xl shadow-lg max-w-xs">
      <StarRating rating={props.rating}/>
      <h2 className="text-lg font-bold text-gray-800 hover:text-blue-600 transition">
        {props.reviewerName}
      </h2>
      
      <p className="text-xs h-full text-oliveBlack mt-2 line-clamp-3">
        {props.description}
      </p>
      <div className="mt-4 flex items-center justify-between text-gray-500 text-xs">
        {/* <span>By {author}</span>
        <span>{date}</span> */}
      </div>
    </div>
  
  )
}

export default ReviewBox

