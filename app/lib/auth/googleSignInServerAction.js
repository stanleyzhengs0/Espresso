import { signIn } from "next-auth/react"


export const handleGoogleSignIn = async () =>{

   try{
      await signIn("google",{redirectTo: "/" })
   }catch(error){
    console.log(error)
   }
}