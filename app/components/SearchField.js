'use client'
import React, { useContext, useEffect, useState } from 'react'
import { CiSearch } from "react-icons/ci";
import { IoIosClose } from "react-icons/io";
import { displaySearchContext } from './Context';


const SearchField = () => {
    
    const [toSearch, setToSearch] = useState("")
    const [showSearchBox, setShowSearchBox] = useState(false)
    const {displaySearch, setDisplaySearch} = useContext(displaySearchContext)
    

    const handleSearchIconClick = () =>{
        setShowSearchBox(!showSearchBox)
    }
    const handleKeyDown = (event) =>{
        if(event.key === 'Enter'){
           setCanSearch(true)
        }
    }
  

  return (
    <>
        <div className='flex'> 

      
            {displaySearch ? (
            
            <>
            <div>hello</div>
            <button 
            className='bg-stone-500 rounded-full p-4'
            onClick={() => setDisplaySearch(false)}
        >
            <IoIosClose size ={25}/>
        </button>
            </>


            ) : (
             
                <button 
                className='bg-stone-500 rounded-full p-4'
                onClick={() => setDisplaySearch(true)}
            >
                <CiSearch size ={25}/>
            </button>


            )
            
            
            
            }
           
          

           
            
            
            
        </div>
      
    </>
  )
}

export default SearchField