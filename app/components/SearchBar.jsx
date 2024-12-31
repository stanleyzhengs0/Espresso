import React from 'react'
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  return (
    <div className='flex'>
      <input
        type="text"
        placeholder="Search for cafes..."
        className="w-full px-4 py-2 rounded-l-md shadow-md text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500"
       />
       <div className='p-4 bg-greyBlue rounded-r-md'>
            <FaSearch/>
       </div>
    </div>
  )
}

export default SearchBar
