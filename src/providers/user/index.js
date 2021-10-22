import { useContext, createContext, useState, useEffect } from 'react';
import { MV_DESAFIO_LOCALSTORAGE_USER } from '../../utils/constants' 

const userCTX = createContext();

export const UserProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [load, setLoad] = useState(false);

    useEffect(() => {
        localStorage.setItem(MV_DESAFIO_LOCALSTORAGE_USER, JSON.stringify(user));
    }, [user]);

    return (
        <userCTX.Provider value={{ user, setUser, load, setLoad }}>
        {children}
        </userCTX.Provider>
    )
}

export const useUser = () => useContext(userCTX);