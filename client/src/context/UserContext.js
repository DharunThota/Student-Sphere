import React, { useState } from "react";

export const UserContext = React.createContext();

export function UserContextProvider({children}){
    const [currentUser, setCurrentUser] = useState({
        name: "",
        sid: "",
        club_id: "",
    }); 
    const [isLoggedIn, setLoggedIn] = useState(false);

    return (
        <UserContext.Provider value={{currentUser, setCurrentUser, isLoggedIn, setLoggedIn}}>
            {children}
        </UserContext.Provider>
      )
}