import { createContext } from "react";

export const AppContext = createContext();

const ContextProvider = (props)=>{
    //data which we want to pass as props 
    const phone="+ 12345678"
    const name="harry"
    const email="xyz@gmail.com"
    return(
        <AppContext.Provider value={{phone,name,email}}>
          {props.children}
        </AppContext.Provider>
    )
}
export default ContextProvider