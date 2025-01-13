'use client'
import React, { useEffect, useState } from 'react'

const GeneratedSummary = (props) => {

    const [summary, setSummary] = useState("")
  

    useEffect(()=>{
        async function getSummary(cafeNameParam){
            try{
                let response = await fetch(`http://localhost:5000/summarize_reviews?cafe=${cafeNameParam}`)
                response = await response.json()
                return response
            }catch(error){
                console.log(error)
            }
           
        }
        setSummary(getSummary(props.cafeNameParam))

    },[])


  return (
    <div>
        {summary}
    </div>
  )
}

export default GeneratedSummary
