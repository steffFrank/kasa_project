import {createContext, useEffect, useState } from "react";
// import { useGetDataFromApi } from "../utils/fetch.utils";

const appartments = JSON.parse(localStorage.getItem("appartments")) || null;

export const AppartementContext = createContext({
    appartments: appartments,
    isLoading: true,
    error: null
})

export const AppartmentProvider = ({children}) => {
    const [appartments, setAppartments] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    
    const url = "http://localhost:3001/appartments";
    useEffect(() => {
        if (appartments.length > 0) return;
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const receivedData = await response.json();
                setAppartments(receivedData);
                setIsLoading(false);
                localStorage.setItem("appartments", JSON.stringify(receivedData));
            } catch (error) {
                setError(error);
                setIsLoading(false);
            }
        }
        fetchData();
    },[appartments.length]);
    const value = { appartments, isLoading, error}
    
    return <AppartementContext.Provider value={value}>{children}</AppartementContext.Provider>
}