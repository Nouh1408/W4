import { createContext } from "react";

export const UserContext = createContext()

export default function UserContextProvider({children}){
    const [isLogin, setIsLogin] = useState(false)
    const [token, setToken] = useState(null)

    //islogin for navabr 
    //setToken, navbar logout, 
    return <UserContext.Provider value={{
        isLogin,setIsLogin,
        token, setToken
    }}>


    </UserContext.Provider>
}