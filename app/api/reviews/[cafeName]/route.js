import { connectToDB } from "@/app/utils/connectdb";
import Review from "@/app/lib/models/reviewSchema";
import { NextResponse } from "next/server";

// export async function GET(req, {params}){
//     const {searchParams} = new URL(req.url)
   

//     try{
//         let response = await fetch(`https://maps.googleapis.com/maps/api/place/details/json?place_id=${params.placeID}&key=${process.env.GOOGLE_API_KEY}`)
//         response = await response.json()
//         return NextResponse.json({success:true, data: response})

//     }catch(error){
//         return NextResponse.json({"Error": error})
//     }
// }

connectToDB()
export async function GET(req,{params}){
    const cafe = params.cafeName
    const reviewsPerPage = 5

    console.log(cafe, "INSIDE CALL")

    // Extract the query parameters from the request URL
    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get('page')); // Default to page 1 if page is not provided

   
    
    
    try{
        //Consider finding cafe by ID, what if multiple location
        const reviews = await Review
        .find({
            "cafeName": cafe,
            "$options" : 'i'
        })
        .skip((page - 1) * reviewsPerPage) // Paginate by skipping previous pages
        .limit(reviewsPerPage)

        const result = await Review.aggregate([
            { $match: {cafeName: cafe} }, // Filter reviews for the specified cafe
            {
              $group: {
                _id: null, // Group all matching reviews
                averageRating: { $avg: "$rating" }, // Calculate the average rating
              },
            },
          ]);
        
        return NextResponse.json({success : true, data: reviews, avg: result[0].averageRating})
    }catch(error){
        return NextResponse.json({success: false, message: "No Data Found"})
    }

} 
