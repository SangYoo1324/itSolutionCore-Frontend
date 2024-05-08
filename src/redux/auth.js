import {createContext, useContext, useState} from "react";

/*
* @deprecated
*  don't use this for auth state management
* */

const AuthContext = createContext(null);

export const AuthProvider = ({children}) => {
    const [member, setMember]  =useState(null);

    const login = (member) =>{
        setMember(member);
    }

    const logout = () =>{
        setMember(null);
    }

    return <AuthContext.Provider value={{member, login, logout}}>{children}</AuthContext.Provider>
}

export const useAuth = () =>{
    return useContext(AuthContext);
}