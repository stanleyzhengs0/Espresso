'use client'
import { handleGoogleSignIn } from "@/app/lib/auth/googleSignInServerAction"

const page = () => {

  return (
    <div className="pt-14">
      <button onClick={handleGoogleSignIn}>
          Log-in
      </button>
                            
    </div>
  )
}

export default page
