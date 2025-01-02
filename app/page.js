'use client'

import { useState } from "react";
import { useRouter } from 'next/navigation';
import SearchBar from './components/SearchBar';
import CompanyReviewCard from "./components/CompanyReviewCard";

export default function Home() {

  const router = useRouter()
  const [displaySearch, setDisplaySearch] = useState(false)
  const [searchInput, setSearchInput] = useState('')
  const [predictions, setPredictions] = useState([])

  const fetchPlaces = async (inputVal) => {
    let response = await fetch(`http://localhost:3000/api/autocomplete?input=${inputVal}`,{
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


  return (
  <div className="pt-12 relative grid h-screen grid-rows-[1fr_auto] bg-center">
    <div className="">
      
    
      {/* Hero Section */}
      <div className="relative border-2 bg-custom-bg bg-cover bg-center h-[50vh]">
       
        <div className="flex justify-center h-40">
          <img src="./homepage.png"/>
        </div>


        <div className="border-2 relative flex flex-col justify-center items-center h-auto gap-16">
          <h1 className="text-5xl text-center font-bold font-sans">Discover Review the best Cafes in the City</h1>
          <SearchBar/>
        </div>
      </div>

    
      <div className="container mx-auto py-10">
        <h2 className="text-2xl font-bold mb-4">Discover Cafes</h2>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-3 lg:grid-cols-5" >
          <CompanyReviewCard/>
          <CompanyReviewCard/>
          <CompanyReviewCard/>
          <CompanyReviewCard/>
          <CompanyReviewCard/>
          <CompanyReviewCard/>
          <CompanyReviewCard/>
          <CompanyReviewCard/>

        </div>
        
        
      </div>

      
     
    </div>
  </div>
  );
}
