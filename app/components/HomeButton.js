import { useRouter } from 'next/navigation'
import React from 'react'
import { GrHomeRounded } from "react-icons/gr";

const HomeButton = () => {
    const router = useRouter()
  return (
    <button 
        className='bg-stone-500 rounded-full p-4'
        onClick={() => router.push(`./`)}
    >
            <GrHomeRounded size ={22}/>
    </button>
  )
}

export default HomeButton
