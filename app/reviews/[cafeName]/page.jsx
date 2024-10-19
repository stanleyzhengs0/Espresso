'use client'
import ReviewListWithLoader from "@/app/components/ReviewListWithLoader"
import { useState, useEffect } from "react"


// async function getSummary(cafeNameParam){
//     let response = await fetch(`http://localhost:5000/summarize_reviews?cafe=${cafeNameParam}`)
//     response = await response.json()
//     return response
// }

async function getReviews(cafeNameParam){
    let response = await fetch(`http://localhost:3000/api/reviews/${cafeNameParam}?page=${1}`,{
        method: "GET"
    })
    response = await response.json()
    return response
}


export default async function viewCafe ({params}){
    const cafe = decodeURIComponent(params.cafeName).replaceAll(" ","")
    console.log(cafe, "Dynamic URL")

    const [reviews, setReviews] = useState([])
    const [cafeImage, setCafeImage] = useState([])

  
    useEffect(() =>{
        const fetchData = async () => {
            const pageContent = await getReviews(params.className)
            setReviews(pageContent)
        } 
        fetchData()
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

                <div className="flex-col gap-5"> 
                    {reviews.map((items)=>(
                    
                    <ReviewBox reviewerName={items.reviewerName} description={items.description}/>
                ))}
                </div>

            

                
              

            </div>
           
            
        </div>
    
       
           

            
            

        </>
    )
   
}