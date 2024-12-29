import ReviewList from "@/app/components/ReviewList"
import StarRating from "@/app/components/StarRating"
import NavBar from "@/app/components//NavBar";


async function getSummary(cafeNameParam){
  try{
      let response = await fetch(`http://localhost:5000/summarize_reviews?cafe=${cafeNameParam}`)
      response = await response.json()
      return response
  }catch(error){
      console.log(error)
  }
}

async function getAvgRating(cafeNameParam){
  try{
    let response = await fetch(`http://localhost:3000/api/reviews/${cafeNameParam}`)
    response = await response.json()
    return response.avg
  }catch(error){
    console.log(error + "unable to get average rating")
  }
}

export default async function viewCafe ({params}){
    const cafe = params.cafeName

    console.log(cafe)

    const cleanUrlString = decodeURIComponent(cafe).normalize('NFD').replace(/[\u0300-\u036f]/g, '').trim();
    const summary = await getSummary(cleanUrlString)
    const avgRating = await getAvgRating(cleanUrlString)
    const thumbnail = `${cafe}.jpg`

    


    return(
        <>
          <NavBar/>
          <div className="flex flex-col h-screen mt-6 pt-12 font-sans">
            {/* CAFE INFO SECTION */}
              <div className="flex gap-4 font-sans p-4" alt="cafe-info-section">
                {/* Left Side */}
                <div className="flex flex-col w-1/2 p-2 drop-shadow">
                  <h1 className="text-7xl font-bold mb-4 ">{cleanUrlString}</h1>
                  <p className=""></p>
                  <div className="flex-1 border p-2">
                    {/* {summary.summary} */}
                  </div>
                  <div className="flex flex-col  gap-3 border p-2 w-full h-full">
                    <div className="bg-brown rounded-md w-8">
                      {avgRating.toFixed(2)}
                    </div>
                    <div className="text-6xl">
                      
                      <StarRating rating={avgRating} />
                    </div>
                  </div>
                </div>
                {/* Right Side */}
                <div className="w-1/2 border-2 rounded-3xl p-2">
                  <img
                    src = "../ThreeJewelsCafe.jpg"
                    className="rounded-3xlg"
                  />
                </div>
              </div>
          
              {/* REVIEW SECTION */}
              <div className="flex justify-center gap-4 bg-olive p-2" alt="cafe-review-section">
                <ReviewList cafeName={cleanUrlString}/>
              </div>
          </div>
        </>
        
      
      
    )
   
}