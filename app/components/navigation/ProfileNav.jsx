'use client'
import { useState } from "react"



const ProfileNav =  ({userImage}) => {
   
    const [isOpen, setIsOpen] = useState(false)

    const handleDropDown = () =>{
        setIsOpen(!isOpen)
    }

  return (
    <div className="block px-3 rounded-full ">
        <button>
            <img src={userImage}/>
        </button>
        
 
    </div>
  )
}

export default ProfileNav
