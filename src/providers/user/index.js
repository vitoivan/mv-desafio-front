import { useContext, createContext, useState, useEffect } from 'react';
import { MV_DESAFIO_LOCALSTORAGE_USER } from '../../utils/constants' 

const userCTX = createContext();

export const UserProvider = ({ children }) => {

    const [user, setUser] = useState(null);

    useEffect(() => {
        localStorage.setItem(MV_DESAFIO_LOCALSTORAGE_USER, JSON.stringify(user));
    }, [user]);

    return (
        <userCTX.Provider value={{ user, setUser }}>
        {children}
        </userCTX.Provider>
    )
}

export const useUser = () => useContext(userCTX);