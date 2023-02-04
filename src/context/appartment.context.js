import { createContext } from "react";
import { useGetDataFromApi } from "../utils/fetch.utils";

export const appartementContext = createContext({
    appartments: [],
    isLoading: true,
    error: null,
});

export const AppartmentProvider = ({ children }) => {
    const { data, isLoading, error } = useGetDataFromApi(
        "http://localhost:3001/appartments"
    );
    const value = { appartments: data, isLoading, error };
    return (
        <appartementContext.Provider value={value}>
            {children}
        </appartementContext.Provider>
    );
};
