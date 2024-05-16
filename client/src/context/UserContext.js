import React, { useState } from "react";

export const UserContext = React.createContext();

export function UserContextProvider({children}){
    const [currentUser, setCurrentUser] = useState({
        fname: "",
        lname: "",
        sid: "",
        club_id: "",
        name: "",
    }); 
    const [isLoggedIn, setLoggedIn] = useState(false);
    const [privilege, setPrivilege] = useState('');

    return (
        <UserContext.Provider value={{currentUser, setCurrentUser, isLoggedIn, setLoggedIn, privilege, setPrivilege}}>
            {children}
        </UserContext.Provider>
      )
}