import React, { useEffect, useState } from 'react'
import Link from 'next/link'


const SearchField = () => {
    
    const [toSearch, setToSearch] = useState("")


  

  return (
    <>
        <div className='flex'> 
            <input
            className='rounded-full'
                onChange={(e)=>{setToSearch(e.target.value)}}
            >
        
            </input>

            <Link
                href = {`/reviews/${toSearch}`}
            >
            
            <button className='bg-stone-500 rounded-full pr-3 pl-3'>
                Search
            </button>
            </Link>

        </div>
      
    </>
  )
}

export default SearchField