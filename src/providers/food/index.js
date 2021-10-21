import { useContext, createContext, useState, useEffect } from 'react';
import { MV_DESAFIO_LOCALSTORAGE_FOOD } from '../../utils/constants' 

const foodCTX = createContext();

export const FoodProvider = ({ children }) => {

    const [food, setFood] = useState([]);

    useEffect(() => {
        localStorage.setItem(MV_DESAFIO_LOCALSTORAGE_FOOD, JSON.stringify(food));
    }, [food]);

    return (
        <foodCTX.Provider value={{ food, setFood }}>
        {children}
        </foodCTX.Provider>
    )
}

export const useFood = () => useContext(foodCTX);