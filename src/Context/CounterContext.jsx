import { createContext } from "react";



const CounterContext = createContext()

export default function CounterContextProvider(children){
    return(
        <CounterContext.Provider value={{x:"ahmed", name: "mahmoud"}}>
            {children}
        </CounterContext.Provider>
    )
}