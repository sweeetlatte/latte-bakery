import React, { createContext, useState } from "react";
import { IUser } from "../types";

type IContext = {
    userData: IUser | undefined;
    setUserData: (user: IUser | undefined) => void;
};

// Step 0: Init state inside Provider
const INITIAL_STATE = {
    userData: undefined,
    setUserData: () => null,
};

// Step 1: Create Context
export const UserDataContext = createContext<IContext>(INITIAL_STATE);

// Step 2: Create manager of Context
const UserDataProvider: React.FC = ({ children }) => {
    // Step 3: Init resources inside context
    const [userData, setUserData] = useState<IUser>();

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
