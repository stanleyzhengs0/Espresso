async function getCafe(cafeNameParam){
    let response = await fetch(`http://localhost:3000/api/reviews/${cafeNameParam}`,{
        cache: "no-store",
        method: "GET"
    }).catch((error) => console.log("Error Fetching API"))

    response = await response.json()


    return response
}

export default async function viewCafe ({params}){
    const cafe = decodeURIComponent(params.cafe)

    console.log(params, "page componenet")

    const dbCafe = await getCafe(cafe)
    
    return(
        <>
            HELLOW
            {params.cafeName}
            
        </>
    )
   
}