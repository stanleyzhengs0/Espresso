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
    const reviewsPerPage = 10

    console.log(cafe, "INSIDE CALL")

    // Extract the query parameters from the request URL
    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get('page')); // Default to page 1 if page is not provided

    
    
    try{
        const reviews = await Review
        .find({
            "cafeName": cafe,
            "$options" : 'i'
        })
        .skip((page - 1) * reviewsPerPage) // Paginate by skipping previous pages
        .limit(reviewsPerPage)
        
        return NextResponse.json({success : true, data: reviews})
    }catch(error){
        return NextResponse.json({success: false, message: "No Data Found"})
    }

} 
