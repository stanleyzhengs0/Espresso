import { NextResponse } from "next/server"
export async function GET (req, res){
    
    const lat = 40.727342
    const lng = 73.993392
    const radius = 5000
    const type = 'food'

    const {searchParams} = new URL(req.url)

    try{
        let response = await fetch(`https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${searchParams.get('input')}&key=${process.env.GOOGLE_API_KEY}&types=${type}&location=${lat},${lng}&radius=${radius}}`)
        response = await response.json()
        return NextResponse.json({success:true, data: response})
       
    }catch(error){
        console.log(error)
    }
}