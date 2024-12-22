'use client'

import { useState, useEffect } from "react"
import ReviewList from "@/app/components/ReviewList"
import StarRating from "@/app/components/StarRating"


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
   

  //   const [reviews, setReviews] = useState([])
    

  //  useEffect(() => {
  //   const fetchReview = async () =>{
  //       const pageContent = await getReviews(cleanUrlString)
  //       console.log(pageContent)
  //       setReviews(pageContent.data)
  //   }
  //   fetchReview()

    
  //  },[])

    


    return(
     
        <div className="flex flex-col h-screen mt-6 font-sans">
        {/* CAFE INFO SECTION */}
          <div className="flex gap-4 h-2/5 font-sans p-4" alt="cafe-info-section">
            {/* Left Side */}
            <div className="flex flex-col w-1/2 p-2 drop-shadow">
              <h1 className="text-5xl font-bold mb-4 ">{cleanUrlString}</h1>
              <p className=""></p>
              <div className="flex-1 border p-2">Description</div>
              <div className="flex-1 border p-2">stars</div>
            </div>
            {/* Right Side */}
            <div className="w-1/2 border-2 rounded-3xl p-2">image section</div>
          </div>
      
          {/* REVIEW SECTION */}
          <div className="bg-olive h-3/5 p-2" alt="cafe-review-section">
            <ReviewList cafeName={cleanUrlString}/>
          </div>
      </div>
      
      
    )
   
}