'use client'
import { auth } from "./authConfig";
import { createContext, useState, useEffect, useContext } from "react";

const AuthContext = createContext() 

// Provider
export const AuthProvider = ({children}) =>{

    const [user, setUser] = useState(null)

    useEffect(()=>{
        
        const fetchSession = async () => {
            try{
             
                const user = await auth()
                
                
                setUser(user)
                

            }catch(error){
                console.log(error)
            }
        }
        fetchSession()
        
    },[])


    return(
        <AuthContext.Provider value={{user}}>
            {children}
        </AuthContext.Provider>
    )
}

// Consumer/custom hook for error checking undefined
export const useAuthContext = () => {
    const context = useContext(AuthContext)

  return context
};