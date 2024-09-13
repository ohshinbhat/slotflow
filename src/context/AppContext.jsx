import React, { useContext, useState }  from "react";


export const AppContext = React.createContext()

export function useApp(){
    return useContext(AppContext);
}

export const AppContextProvider = ({ children }) =>{
    const [appUser, setAppUser] = useState('user');

    const value = { appUser, setAppUser};

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
} 