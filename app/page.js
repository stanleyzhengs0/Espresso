'use client'
import FooterNavigation from './components/FooterNavigation'
import { useEffect, useRef, useState } from "react";
import { displaySearchContext } from "./components/Context";

  



export default function Home() {
  const [displaySearch, setDisplaySearch] = useState(false)
  const [searchInput, setSearchInput] = useState('')
  const [predictions, setPredictions] = useState([])


  const fetchPlaces = async (inputVal) => {
    let response = await fetch(`http://localhost:3000/api/places?input=${inputVal}`,{
      method: "GET"
    })
    response = await response.json()
    console.log(response.data.predictions)
    setPredictions(response.data.predictions || [])
  }

  const handleChange = (event) => {
    setSearchInput(event.target.value)
    fetchPlaces(event.target.value)
  }

  // const handleAutocompleteClick = () =>{
  //   searchInput()
  // }



  

  return (
  <div className="relative grid h-screen grid-rows-[1fr_auto] bg-cover bg-center">
    <div className="p-4">
    insert background

    </div>
    <nav className="bg-white bg-opacity-80 p-3 shadow-lg mb-4">
      {displaySearch && 

        <>
        {predictions.length > 0 && 
        
        <div className='w-full border-gray-200 rounded-lg  '>
          {predictions.map((item, index) =>(
            <button
              className='w-full px-4 py-2 border-b border-gray-200 rounded-t-lg hover:bg-slate-300 transition duration-200'
              // onClick={handleAutocompleteClick}
            
            
            >
              {item?.description}
              
              
            </button>
          ))}
        </div>
        
        
        
        }
         
       
         {predictions?.description}
         <input
           className="w-full p-3 border border-gray-300 rounded-full"
           placeholder="Search by Cafe Name..."
           onChange={handleChange}
           // onKeyDown={handleEnterSearch}
         />
        </>
    
       
      
      }



          {/* <input
            className="w-full p-3 border border-gray-300 rounded-full"
            placeholder="Search by Cafe Name..."
            onChange={(event)=> {setToSearch(event.target.value)}}
            onKeyDown={handleEnterSearch}
          />
           
        </>
      } */}
      <displaySearchContext.Provider value = {{displaySearch, setDisplaySearch,setPredictions}}>
          <FooterNavigation/>
      </displaySearchContext.Provider>
      
      
    </nav>
  </div>
  );
}
