import { signIn } from "next-auth/react"
import { useAuthContext } from "./authContext"



export const handleGoogleSignIn = async () =>{

  
   try{
    await signIn("google")
   }catch(error){
    console.log(error)
   }
}