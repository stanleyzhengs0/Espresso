
import React from 'react'

const ReviewBox = (props) => {
  return (
    <div className="bg-beige shadow-md rounded-lg overflow-hidden max-w-sm">
    <div className="p-4">
      <h2 className="text-lg font-bold text-gray-800 hover:text-blue-600 transition">
        {props.reviewerName}
      </h2>
      <p className="text-sm text-gray-600 mt-2 line-clamp-3">
        {props.description}
      </p>
      <div className="mt-4 flex items-center justify-between text-gray-500 text-xs">
        {/* <span>By {author}</span>
        <span>{date}</span> */}
      </div>
    </div>
  </div>
  )
}

export default ReviewBox

