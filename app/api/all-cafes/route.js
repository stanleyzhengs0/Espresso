import { connectToDB } from "@/app/utils/connectdb";
import { NextResponse } from "next/server";
import Review from "@/app/lib/models/reviewSchema";

export async function GET(){
    try{
        await connectToDB()

        const cafes = await Review.aggregate([
            {
                $group:{
                    _id: "$cafeName",
                    averageRating: {$avg: "$rating"},
                   
                }
            }
        ])

        return NextResponse.json({success: true, data: cafes})

    }catch(error){
        return NextResponse.json({"error": error})
    }
}

// import { connectToDB } from "@/app/utils/connectdb";
// import Review from "@/app/lib/models/reviewSchema";
// import { NextResponse } from "next/server";
// import { generateSummary } from "@/app/utils/summarizer";  // Summarizer function

// // Establish connection to DB
// connectToDB();

// export async function GET(req) {
//     try {
//         // Fetch distinct cafes and calculate the average rating for each cafe
//         const cafes = await Review.aggregate([
//             {
//                 $group: {
//                     _id: "$cafeName",  // Group by cafeName
//                     averageRating: { $avg: "$rating" },  // Calculate average rating
//                     reviews: { $push: "$description" }  // Push all reviews for later summarization
//                 }
//             }
//         ]);

//         // Generate summary and attach to each cafe
//         const cafesWithSummaries = cafes.map(async (cafe) => {
//             // Generate a summary from all reviews for this cafe
//             const summary = await generateSummary(cafe.reviews);

//             return {
//                 cafeName: cafe._id,
//                 averageRating: cafe.averageRating,
//                 summary
//             };
//         });

//         // Wait for all summaries to be generated
//         const cafesFinal = await Promise.all(cafesWithSummaries);

//         // Return the result with cafes, average rating, and summary
//         return NextResponse.json({ success: true, data: cafesFinal });
//     } catch (error) {
//         return NextResponse.json({ success: false, message: "Error fetching cafes and summaries", error });
//     }
// }