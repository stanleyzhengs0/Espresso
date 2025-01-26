'use client'

import { useQuery } from '@tanstack/react-query'
import SpinnerEffect from '../SpinnerEffect'
import ListAllCafeCard from './ListAllCafeCard'

const BrowseCafeList = () => {
    
    const {data, isLoading}  = useQuery({
        queryKey: ["cafes"],
        queryFn: () => fetch("/api/all-cafes").then((res) => res.json())
    })
        
    if(isLoading){
        return <SpinnerEffect/>
    }

    console.log(data?.data)

  return (
 

    <div className='' alt='Listed_review_section'>
        {data?.data.map((item, index) =>(

            <ListAllCafeCard key={index} cafeName={item._id} cafeAvgRating={item.averageRating.toFixed(2)}/>
            
        ))}
    </div>
      
 
  )
}

export default BrowseCafeList
