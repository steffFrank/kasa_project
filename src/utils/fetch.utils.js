import { useState, useEffect } from "react";
const appartments = JSON.parse(localStorage.getItem("appartments")) || [];

export const useGetDataFromApi = (url) => {
    const [data, setData] = useState(appartments);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                if (data.length) {
                    setIsLoading(false);
                } else {
                    const response = await fetch(url);
                    const receivedData = await response.json();
                    setData(receivedData);
                    setIsLoading(false);
                    localStorage.setItem("appartments", JSON.stringify(data));
                }
               
            } catch (error) {
                setError(error);
                setIsLoading(false);
            }
        }
        fetchData();
    },[url, data]);

    return {data, isLoading, error}
}
