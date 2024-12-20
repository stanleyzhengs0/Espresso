'use client'
import ReviewListWithLoader from "@/app/components/ReviewListWithLoader"
import { useState, useEffect } from "react"
import ReviewBox from "@/app/components/ReviewBox"


// async function getSummary(cafeNameParam){
//     let response = await fetch(`http://localhost:5000/summarize_reviews?cafe=${cafeNameParam}`)
//     response = await response.json()
//     return response
// }

async function getReviews(cafeNameParam){
    try{
        let response = await fetch(`http://localhost:3000/api/reviews/${cafeNameParam}?page=${1}`,{
            method: "GET"
        })
        response = await response.json()
        return response
    }catch(error){
        console.log("failed to fetch reviews")
        
    }
}


export default function viewCafe ({params}){
    const cafe = params.cafeName

    console.log(cafe)

    const cleanUrlString = decodeURIComponent(cafe).normalize('NFD').replace(/[\u0300-\u036f]/g, '').trim();
    console.log(cleanUrlString, "Dynamic URL")

    const [reviews, setReviews] = useState([])
    

   useEffect(() => {
    const fetchReview = async () =>{
        const pageContent = await getReviews(cleanUrlString)
        console.log(pageContent)
        setReviews(pageContent.data)
    }
    fetchReview()

    
   },[])

    


    return(
     
        <div className="flex flex-col h-screen bg-oliveBlack">
        {/* CAFE INFO SECTION */}
        <div className="flex gap-4 h-2/5 border-8" alt="cafe-info-section">
          {/* Left Side */}
          <div className="flex flex-col w-1/2 bg-gray-100 p-2">
            <div className="flex-1 border p-2">name</div>
            <div className="flex-1 border p-2">stars</div>
          </div>
          {/* Right Side */}
          <div className="w-1/2 bg-gray-200 p-2">image section</div>
        </div>
      
        {/* REVIEW SECTION */}
        <div className="h-3/5 p-2 border-t-8 border-black" alt="cafe-review-section">
          review-section
        </div>
      </div>
      
      
    )
   
}