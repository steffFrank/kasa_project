import { useState, useEffect } from "react";

export const useGetDataFromApi = async (url) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const receivedData = await response.json();
                setData(receivedData);
                setIsLoading(false);
            } catch (error) {
                setError(error);
                setIsLoading(false);
            }
        }
        fetchData();
    },[url]);

    return {data, isLoading, error}
}
