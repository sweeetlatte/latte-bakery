import React, { createContext, useState } from "react";
import { IUser } from "../types";

type IContext = {
    userData: IUser | null;
    setUserData: (user: IUser) => void;
};

// Step 0: Init state inside Provider
const INITIAL_STATE = {
    userData: null,
    setUserData: () => null,
};

// Step 1: Create Context
export const UserDataContext = createContext<IContext>(INITIAL_STATE);

// Step 2: Create Context manager: Provider
const UserDataProvider: React.FC = ({ children }) => {
    // Step 3: Init resources inside context
    const [userData, setUserData] = useState<IUser | null>(null);

    const value = {
        userData,
        setUserData,
    };

    return (
        <UserDataContext.Provider value={value}>
            {children}
        </UserDataContext.Provider>
    );
};

export default UserDataProvider;
