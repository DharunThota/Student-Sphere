import React, { useState } from "react";

export const UserContext = React.createContext();

export function UserContextProvider({children}){
    const [currentUser, setCurrentUser] = useState({
        fname: "Dharun",
        lname: "Thota",
        sid: "cs22b1083",
        club_id: "1",
        name: "CS Club",
    }); 
    const [isLoggedIn, setLoggedIn] = useState(true);

    return (
        <UserContext.Provider value={{currentUser, setCurrentUser, isLoggedIn, setLoggedIn}}>
            {children}
        </UserContext.Provider>
      )
}