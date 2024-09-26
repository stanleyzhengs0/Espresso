'use client'
import React, { useState, useEffect } from 'react'
import ReviewBox from './ReviewBox'

async function getReviews(cafeNameURL, page){
    let response = await fetch(`http://localhost:3000/api/reviews/${cafeNameURL}?page=${page}`)
    return response.json()
}

const ReviewList = (props) => {

    const [reviews, setReviews] = useState([])
    const [page, setPage] = useState(1)
    const [loading, isLoading] = useState(false)
    const [hasMore, setHasMore] = useState(true)

    useEffect(() =>{
        fetchMoreReviews()
    },[])


    const fetchMoreReviews = async () =>{
        const collection = await getReviews(props.cafeName, page)
        const newReviews = collection.data
        console.log(newReviews)

        // setReviews(newReviews)
     

        setReviews((prevReviews) => [...prevReviews, ...newReviews])
    }
  return (
    <div>
        Review List output: 
        {props.cafeName}

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
