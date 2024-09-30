'use client'
import FooterNavigation from './components/FooterNavigation'
import { useState } from "react";
import { displaySearchContext } from "./components/Context";
import { useRouter } from 'next/navigation';

export default function Home() {
  const [displaySearch, setDisplaySearch] = useState(false)
  const [toSearch, setToSearch] = useState("")

  const router = useRouter()

  const handleEnterSearch = (event) => {
    if(event.key == "Enter"){
      router.push(`./reviews/${toSearch}`)
    }
  }

  return (
  <div class="relative grid h-screen grid-rows-[1fr_auto] bg-cover bg-center">
    <div class="p-4">
    

    </div>
    <nav class="bg-white bg-opacity-80 p-3 shadow-lg mb-4">


      {displaySearch &&     
        <>
          <input
            className="w-full p-3 border border-gray-300 rounded-full"
            placeholder="Search by Cafe Name..."
            onChange={(event)=> {setToSearch(event.target.value)}}
            onKeyDown={handleEnterSearch}
          />
          
        </>
      }
      <displaySearchContext.Provider value = {{displaySearch, setDisplaySearch}}>
          <FooterNavigation/>
      </displaySearchContext.Provider>
      
      
    </nav>
  </div>
  );
}
