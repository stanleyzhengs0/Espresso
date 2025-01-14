'use client'
import { auth } from "./authConfig";
import { createContext, useState, useEffect, useContext } from "react";

const AuthContext = createContext(null) 

export const AuthProvider = ({children}) =>{
    
    const [session, setSession] = useState(null)

    useEffect(()=>{

        const fetchSession = async () => {
            try{
                const sesh = await auth()
                setSession(sesh)
            }catch(error){
                console.log(error)
            }
        }

        fetchSession()
        
    },[])

    console.log(session)

    return(
        <AuthContext.Provider value={{session, setSession}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuthContext = () => {
    const context = useContext(AuthContext)
    if(!context)
  return 
};