import { connectToDB } from "@/app/utils/connectdb";
import Review from "@/app/lib/models/reviewSchema";
import { NextResponse } from "next/server";


connectToDB()
export async function GET(req, res){
    const name = req.query

    if(!name){
        return NextResponse.json({message: "response undefined"})
    }

    // const cafe = params.cafeName
    try{
    
        console.log(name, "ROUTER")
        // const result = await Review.find({cafeName: cafe})
        // return NextResponse.json({success: true, data: result})
        
        return NextResponse.json({success: true, message: "WOKRING API", input: params})
    }catch(error){
        return NextResponse.json({success: false, message: "Couldnt fetch data"})
    }
}