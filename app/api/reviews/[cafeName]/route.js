import { connectToDB } from "@/app/utils/connectdb";
import Review from "@/app/lib/models/reviewSchema";
import { NextResponse } from "next/server";


connectToDB()
export async function GET(req, {params}){
    const cafe = params.cafeName

     
    try{
        const reviews = await Review.find({"cafeName": {"$regex": cafe, "$options": "i"}})
        console.log(typeof(reviews))
        return NextResponse.json({success : true, data: reviews})
    }catch(error){
        return NextResponse.json({success: false, message: "No Data Found"})
    }

} 