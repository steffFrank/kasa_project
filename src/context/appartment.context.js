import {createContext, useEffect, useState } from "react";
// import { useGetDataFromApi } from "../utils/fetch.utils";

export const AppartementContext = createContext({
    appartements: null,
})

export const AppartmentProvider = ({children}) => {
    const [appartments, setAppartments] = useState(AppartementContext.appartements);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    
    const url = "http://localhost:3001/appartments";
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const receivedData = await response.json();
                setAppartments(receivedData);
                setIsLoading(false);
            } catch (error) {
                setError(error);
                setIsLoading(false);
            }
        }
        fetchData();
    },[]);
    const value = { appartments, isLoading, error}
    
    return <AppartementContext.Provider value={value}>{children}</AppartementContext.Provider>
}