import React, { useEffect, useState } from 'react'
import Link from 'next/link'


const SearchField = () => {
    
    const [toSearch, setToSearch] = useState("")


  

  return (
    <>
        <input
            onChange={(e)=>{setToSearch(e.target.value)}}
        >
    
        </input>

        <Link
            href = {`/reviews/${toSearch}`}
        >
        
        <button
        >
            Search
        </button>
        </Link>
    </>
  )
}

export default SearchField