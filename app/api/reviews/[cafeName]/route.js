import { connectToDB } from "@/app/utils/connectdb";
import Review from "@/app/lib/models/reviewSchema";
import { NextResponse } from "next/server";



connectToDB()
export async function GET(req,{params}){
    const cafe = params.cafeName
    const reviewsPerPage = 10



    // Extract the query parameters from the request URL
    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get('page')); // Default to page 1 if page is not provided

    console.log(page, "PAGE");
   
     
    try{
        const reviews = await Review
        .find({"cafeName": {"$regex": cafe, "$options": "i"}})
        .skip((page - 1) * reviewsPerPage) // Paginate by skipping previous pages
        .limit(reviewsPerPage)
        

        console.log(typeof(reviews))
        return NextResponse.json({success : true, data: reviews})
    }catch(error){
        return NextResponse.json({success: false, message: "No Data Found"})
    }

} 


// export async function FETCH(req, res){
//     const cafe = params.cafeName
//     const reviewsPerPage = 10

//     console.log(res, "response")

   

//     console.log(params)
   
     
//     try{
//         const reviews = await Review
//         .find({"cafeName": {"$regex": cafe, "$options": "i"}})
//         .limit(reviewsPerPage)
        

//         console.log(typeof(reviews))
//         return NextResponse.json({success : true, data: reviews})
//     }catch(error){
//         return NextResponse.json({success: false, message: "No Data Found"})
//     }

// } 