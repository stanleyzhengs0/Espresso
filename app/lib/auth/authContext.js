'use client'
import { auth } from "./authConfig";
import { createContext, useState, useEffect, useContext } from "react";

const AuthContext = createContext({user:null}) 

// Provider
export const AuthProvider = ({children}) =>{
    const [user, setUser] = useState(null)
    const [isloading, setIsloading] = useState(false)

    useEffect(()=>{

        const fetchSession = async () => {
            try{
                setIsloading(true)
                const user = await auth()
                
                if (user){
                    setUser(user)
                }
                
            }catch(error){
                console.log(error)
            }finally{
                setIsloading(false)
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