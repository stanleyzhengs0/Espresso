import { connectToDB } from "@/app/utils/connectdb";
import Review from "@/app/lib/models/reviewSchema";
import { NextResponse } from "next/server";

connectToDB()
export async function GET({ params }){
  
    // const cafe = params.cafeName
    try{
        console.log(params,"API")
        // const result = await Review.find({cafeName: cafe})
        // return NextResponse.json({success: true, data: result})
        
        return NextResponse.json({success: true, message: "WOKRING API"})
    }catch(error){
        return NextResponse.json({success: false, message: "Couldnt fetch data"})
    }
}