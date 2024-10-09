import ReviewListWithLoader from "@/app/components/ReviewListWithLoader"


async function getSummary(cafeNameParam){
    let response = await fetch(`http://localhost:5000/summarize_reviews?cafe=${cafeNameParam}`)
    response = await response.json()
    return response
}


export default async function viewCafe ({params}){
    const cafe = decodeURIComponent(params.cafeName).replaceAll(" ","")
    console.log(cafe, "Dynamic URL")

    const reviewSummary = await getSummary(params.cafeName)


    return(
        <>
        <div className="flex-col bg-stone-500 "> 
            <div className="h-80"> 
                <img
                    src = {`/images/${cafe}.jpg`}
                    className = 'w-full h-full object-cover'
                > 
                </img>
            </div>
            
            <div className="h-52"> 
            
            {JSON.stringify(reviewSummary.summary).replaceAll('"', "")}
            </div>
    
            <div> 
                Review Page: 

                {/* <div className="flex-col gap-5"> 
                    {reviews.map((items)=>(
                    
                    <ReviewBox reviewerName={items.reviewerName} description={items.description}/>
                ))}
                </div> */}

            

                
               <ReviewListWithLoader cafeName = {params.cafeName}/>

            </div>
           
            
        </div>
    
       
           

            
            

        </>
    )
   
}