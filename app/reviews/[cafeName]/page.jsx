
import ReviewBox from "@/app/components/ReviewBox"
import ReviewList from "@/app/components/ReviewList"

// async function getCafe(cafeNameParam){
//     console.log(cafeNameParam, "API CALL")
//     let response = await fetch(`http://localhost:3000/api/reviews/${cafeNameParam}`,{
//         cache: 'no-store',
//         method: 'GET'
//     })
//     response = await response.json()
//     return response
// }

// async function getSummary(cafeNameParam){
//     let response = await fetch(`http://localhost:5000/summarize_reviews?cafe=${cafeNameParam}`)
//     response = await response.json()
//     return response
// }


export default async function viewCafe ({params}){
    const cafe = decodeURIComponent(params.cafeName).replaceAll(" ","")
    console.log(cafe, "Dynamic URL")

    // const dbCafe = await getCafe(params.cafeName)
    // const reviews = dbCafe.data
    // const reviewSummary = await getSummary(params.cafeName)






    
    return(
        <>
        <div className="flex-col bg-stone-500"> 
            <div className="h-80"> 
                <img
                    src = {`./lib/images/${cafe}.jpg`}
                > 
                </img>
            IMG
            </div>
            
            <div className="h-52"> 
            Generated Summary
            {/* {JSON.stringify(reviewSummary.summary).replaceAll('"', "")} */}
            </div>
    
            <div> 
                Review Page: 

                {/* <div className="flex-col gap-5"> 
                    {reviews.map((items)=>(
                    
                    <ReviewBox reviewerName={items.reviewerName} description={items.description}/>
                ))}
                </div> */}
                <ReviewList cafeName = {params.cafeName}/>

            </div>
           
            
        </div>
    
       
           

            
            

        </>
    )
   
}