'use client'
import React, { useState, useEffect } from 'react'
import ReviewBox from './ReviewBox'

async function getReviews(cafeNameURL, page){
    try{
        let response = await fetch(`http://localhost:3000/api/reviews/${cafeNameURL}?page=${page}`,{
                    cache: 'no-store',
                    method: 'GET'
            })
        
            response = await response.json()
            return response
    }catch(error){
        return console.log("failed to fetch review API")
    }
    
}

const ReviewList = ({cafeName, handleDataLoader}) => {

    const [reviews, setReviews] = useState([])
    const [page, setPage] = useState(1)
    const [loading, isLoading] = useState(false)
    const [hasMore, setHasMore] = useState(true)

    useEffect(() =>{
        fetchMoreReviews()
    },[page])


    const fetchMoreReviews = async () =>{
        const collection = await getReviews(cafeName, page)
        const newReviews = collection.data
        setReviews((prevReviews) => [...prevReviews, ...newReviews])

        
        if(page === 1){
            handleDataLoader()
        }else{
            isLoading(false)
        
        }
      
     
        
        
    }

    useEffect(()=>{

        const handleScroll = () => {
            if(
                window.innerHeight + window.scrollY > document.body.offsetHeight - 100 &&
                !loading
            ){
                setPage((prevPage) => prevPage + 1)
            }
        }

        window.addEventListener('scroll', handleScroll)

        // Clean up the event listener when the component unmounts
        return () => window.removeEventListener('scroll', handleScroll)

        
    },[loading])



  return (
    <div>
        {/* Review List output: 
        {props.cafeName} */}

   
        {reviews.map((review, index) =>(
            <ReviewBox
                key = {index}
                reviewerName = {review.reviewerName}
                description = {review.description}
            />
        ))}
     

      
      
    </div>
  )
}

export default ReviewList
