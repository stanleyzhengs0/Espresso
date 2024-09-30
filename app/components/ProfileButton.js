import React from 'react'
import { IoPersonOutline } from "react-icons/io5";

const ProfileButton = () => {
  return (
    <button
        className='bg-stone-500 rounded-full p-4'
    >
        <IoPersonOutline size = {22}/>
    </button>
  )
}

export default ProfileButton
