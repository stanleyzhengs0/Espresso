'use client'
import FooterNavigation from './components/FooterNavigation'
import { useRef, useState } from "react";
import { displaySearchContext } from "./components/Context";
import { useRouter } from 'next/navigation';

import { Autocomplete , useJsApiLoader, StandaloneSearchBox} from '@react-google-maps/api';

const libraries = ['places']

export default function Home() {
  const [displaySearch, setDisplaySearch] = useState(false)


  // const handleEnterSearch = (event) => {
  //   if(event.key == "Enter"){
  //     router.push(`./reviews/${toSearch}`)
  //   }
  // }

  const {isLoaded} = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyD_BHwsD-Hp2np_6Tz6Ve8BjwU_wX9-6qk',
    libraries: libraries
  })

  console.log(isLoaded)

  const inputref = useRef(null)
  const centerLocation = {lat: 40.7128, lng: -74.0060 }

  // Options for Autocomplete
  const autocompleteOptions = {
    types: ['establishment'], // Only search for specific types of places (e.g., businesses, cafes, etc.)
    bounds: {
      north: centerLocation.lat + 0.1,
      south: centerLocation.lat - 0.1,
      east: centerLocation.lng + 0.1,
      west: centerLocation.lng - 0.1,
    }, // Restrict search to a bounding box (around NYC in this case)
    componentRestrictions: { country: 'us' }, // Restrict search to specific countries
  };



  const handlePlaceChange = () =>{
    let address = inputref.current.getPlace()
  }



  return (
  <div className="relative grid h-screen grid-rows-[1fr_auto] bg-cover bg-center">
    <div className="p-4">
    

    </div>
    <nav className="bg-white bg-opacity-80 p-3 shadow-lg mb-4">
      {displaySearch  && 
        <>


        <StandaloneSearchBox
          onLoad={(ref) => {inputref.current = ref}}
          onPlacesChanged={handlePlaceChange}
        >
            <input
              className="w-full p-3 border border-gray-300 rounded-full"
              placeholder="Search by Cafe Name..."
            />



        </StandaloneSearchBox>
        
        
        </>
      
      }

      {/* {displaySearch &&     
        <>
       

          <LoadScript
            googleMapsApiKey={GOOGLE_API_KEY}
            libraries={libraries}
          >
            <Autocomplete
              onPlaceChanged={handlePlaceChange}
              onLoad={handleLoad}
              options={autocompleteOptions}
            >

            <input
              ref={inputRef}
              className="w-full p-3 border border-gray-300 rounded-full"
              placeholder="Search by Cafe Name..."
            />


            </Autocomplete>

          </LoadScript>

          {/* <input
            className="w-full p-3 border border-gray-300 rounded-full"
            placeholder="Search by Cafe Name..."
            onChange={(event)=> {setToSearch(event.target.value)}}
            onKeyDown={handleEnterSearch}
          />
           
        </>
      } */}
      <displaySearchContext.Provider value = {{displaySearch, setDisplaySearch}}>
          <FooterNavigation/>
      </displaySearchContext.Provider>
      
      
    </nav>
  </div>
  );
}
