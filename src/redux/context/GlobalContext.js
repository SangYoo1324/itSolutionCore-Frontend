import {createContext, useContext, useState} from "react";

export const GlobalContext = createContext();

export const GlobalProvider = ({children})=>{
    const [isRouterAnimiationComplete, setIsRouterAnimiationComplete] = useState(false);

    return (
      <GlobalContext.Provider value={{isRouterAnimiationComplete, setIsRouterAnimiationComplete}}>
          {children}
      </GlobalContext.Provider>
    );

}
