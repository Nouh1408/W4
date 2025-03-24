import { createContext,useState } from "react";

export const CounterContext = createContext();

export default function CounterContextProvider({children}){
    const [nameOne, setNameOne] = useState("ahmed")
    const [nameTwo, setNameTwo] = useState("Ihab")
    return <CounterContext.Provider value={{nameOne,nameTwo,setNameOne}}>
        {children}
    </CounterContext.Provider>
}