'use client'
import { useQuery } from "@tanstack/react-query";
import { auth } from "./authConfig";
import { createContext, useContext } from "react";

const AuthContext = createContext({}) 

// Provider
export const AuthProvider = ({children}) =>{

    // const [user, setUser] = useState(null)

    // useEffect(()=>{
        
    //     const fetchSession = async () => {
    //         try{
             
    //             const user = await auth()
                
                
    //             setUser(user)
                

    //         }catch(error){
    //             console.log(error)
    //         }
    //     }
    //     fetchSession()
        
    // },[])

    const {data} = useQuery({
        queryKey: ['authentication'],
        queryFn: () => auth()
    })

    console.log(data)

    return(
        <AuthContext.Provider value={{data}}>
            {children}
        </AuthContext.Provider>
    )
}

// Consumer/custom hook for error checking undefined
export const useAuthContext = () => {
    const context = useContext(AuthContext)

  return context
};