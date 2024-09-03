'use client'
import React, { useState } from 'react'
import { useRouter } from 'next/router'


const SearchField = () => {
    const router = useRouter();

    const [toSearch, setToSearch] = useState("")

    const handleSearchClick = () =>{
        router.push(`/${toSearch}`)
    }

  return (
    <>
        <input
            onChange={(e)=>{setToSearch(e.target.value)}}
        >
        
        </input>

        <button
            onClick={handleSearchClick}
        >
            Search
        </button>
    </>
  )
}

export default SearchField