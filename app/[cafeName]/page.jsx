async function getCafe(cafeName){
    let response = await fetch(`http://localhost:3000/api/cafes/${cafeName}`,{
        cache: "no-store",
        method: "GET"
    })

    response = await response.json()


    return response
}

export default async function viewCafe ({params}){
    const cafe = decodeURIComponent(params.cafe)

    const dbCafe = await getCafe(cafe)
    
    return <>
    Cafe
    {dbCafe.cafeName}
    </>
}