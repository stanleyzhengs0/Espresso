'use client'
import { handleGoogleSignIn } from "../../lib/auth/googleSignInServerAction"
import { useState } from "react"

const SignInButton = () => {

  return (
    <div className="block px-3 rounded-full ">
       <button onClick={handleGoogleSignIn} className="text-white">
          Login
        </button>
    </div>
  )
}

export default SignInButton
