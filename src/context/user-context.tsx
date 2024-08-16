"use client";

import { User } from "@/types/user";
import React from "react";

type UserContext = {
    user: User | null;
    setUser: React.Dispatch<React.SetStateAction<User | null>>;
}

const UserContext = React.createContext<UserContext | null>(null);

export const useUser = () => {
    const context = React.useContext(UserContext);

    if (!context) {
        throw new Error('useUser must be used within an UserProvider');
    }

    return context;
}

export function UserProvider({ children, user }: { children: React.ReactNode, user: User | null }) {
    const [userState, setUserState] = React.useState<User | null>(user);

    return (
        <UserContext.Provider value={{ user: userState, setUser: setUserState }}>
            {children}
        </UserContext.Provider>
    )
}