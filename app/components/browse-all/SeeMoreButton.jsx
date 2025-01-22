import React from 'react'
import { FaAngleRight } from "react-icons/fa";

const SeeMoreButton = () => {
  return (
    <button className='flex justify-between items-center bg-greyBlue p-2 rounded-md w-full'>
        View Cafe
      <FaAngleRight/>
    </button>
  )
}

export default SeeMoreButton
