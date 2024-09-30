'use client'
import ReviewBox from "./components/ReviewBox";
import FooterNavigation from './components/FooterNavigation'
import { useState } from "react";
import { displaySearchContext } from "./components/Context";

export default function Home() {
  const [displaySearch, setDisplaySearch] = useState(false)

  return (
<div class="relative grid h-screen grid-rows-[1fr_auto] bg-cover bg-center">
  <div class="p-4">
    {displaySearch && <div>hello</div>}

  </div>
  <nav class="bg-white bg-opacity-80 p-4 shadow-lg mb-4">
    <displaySearchContext.Provider value = {{displaySearch, setDisplaySearch}}>
        <FooterNavigation/>
    </displaySearchContext.Provider>
    
    
  </nav>
</div>
  );
}
