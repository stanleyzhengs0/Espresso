import { auth } from "./authConfig";

export const checkIsAuthenticated = async () =>{

    const session = await auth()

    if(auth){
        return true
    }else{
        return false
    }
}