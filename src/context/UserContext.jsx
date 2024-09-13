import React, { useContext, useState }  from "react";


export const UserContext = React.createContext();

export function useUser (){
    return useContext(UserContext);
}

export const UserContextProvider = ( {children}) =>{
    const [user, setUser] = useState('');

    const value = {user, setUser};

    return(
        <UserContext.Provider value={ value }>
            { children }
        </UserContext.Provider>
    )


}