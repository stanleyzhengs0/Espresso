'use client'
import React from 'react'
import { FaSearch } from "react-icons/fa";
import { useState } from 'react';
import { useRouter } from 'next/navigation';


const SearchBar = () => {

  const router = useRouter()
  const [predictions, setPredictions] = useState([])

  const fetchPlaces = async (inputVal) => {
    try{
      let response = await fetch(`http://localhost:3000/api/searchbar-autocomplete?input=${inputVal}`,{
        method: "GET"
      })
      response = await response.json()
      console.log(response.data.predictions)
      setPredictions(response.data.predictions || [])

    }catch(error){
      console.log(error)
    }
    
  }

  const handleSearch = (event) =>{
    fetchPlaces(event.target.value)
  }


  return (
    <>
       <div className='flex w-1/2'>
        <input
          type="text"
          placeholder="Search for cafes..."
          onChange={handleSearch}
          className="w-full px-4 py-2 rounded-l-md shadow-md text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />
        <button className='p-4 bg-greyBlue rounded-r-md'>
              <FaSearch/>
        </button>
      </div>
      {/* Pop-up for Autocomplete */}
      <div className='absolute top-96 border-2 bg-grey rounded-md flex flex-col justify-center w-1/2'> 
        {predictions.map((val, index) =>(
          <button
          className='px-3 hover:bg-gray-200 transition duration-200'
            onClick={() =>{router.push(`./reviews/${val?.structured_formatting.main_text}`)}}
          >
           {val?.description}
          </button>
        ))}
      </div>
    </>
   
  )
}

export default SearchBar
