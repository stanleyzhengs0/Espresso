import Review from "@/app/lib/models/reviewSchema";
import { NextResponse } from "next/server";
import { connectToDB } from "@/app/utils/connectdb";

await connectToDB()


export async function GET (){
    try{
        const reviews = Review.find()
        return NextResponse.json({success : true, data: reviews})
    }catch(error){
        return NextResponse.json({success: false, message: "No Data Found"})
    }

}