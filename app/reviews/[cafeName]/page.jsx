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
        setReviews(pageContent.data)
    }
    fetchReview()

    
   },[])

    


    return(
        <>
        <div className="flex-col bg-stone-500 "> 
            <div className="h-80"> 
               
            </div>
            
            <div className="h-52"> 
            
           
            </div>
    
            <div> 
                Review Page: 

              

            

                
              

            </div>
           
            
        </div>
    
       
           

            
            

        </>
    )
   
}