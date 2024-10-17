'use client'
import React, { useContext} from 'react'
import { CiSearch } from "react-icons/ci";
import { IoIosClose } from "react-icons/io";
import { displaySearchContext } from './Context';

const SearchButton = () => {
    
    const {displaySearch, setDisplaySearch, setPredictions} = useContext(displaySearchContext)

  return (
    <>
        <div className='flex'> 
            {displaySearch ? 
                (                    
                    <button 
                        className='bg-stone-500 rounded-full p-4'
                        onClick={() => {
                            setDisplaySearch(false)
                            setPredictions([])
                        }}
                    >
                            <IoIosClose size ={30}/>
                    </button>
                ) : (
                
                    <button 
                        className='bg-stone-500 rounded-full p-4'
                        onClick={() => setDisplaySearch(true)}
                    >
                            <CiSearch size ={30}/>
                            
                    </button>
                    
                )
            }
        </div>
      
    </>
  )
}

export default SearchButton