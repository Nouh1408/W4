import { createContext, useEffect } from "react";

export const UserContext = createContext()

export default function UserContextProvider({children}){
    const [isLogin, setIsLogin] = useState(false)
    const [token, setToken] = useState(null)

    useEffect(() =>{
        if(token==null){
            setIsLogin(false)
        } else{
            setIsLogin(true)
        }
    }, [token])

    //islogin for navabr 
    //setToken, navbar logout, 
    return <UserContext.Provider value={{
        isLogin,setIsLogin,
        token, setToken
    }}>


    </UserContext.Provider>
}