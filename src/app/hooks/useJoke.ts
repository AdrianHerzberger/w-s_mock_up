import { useState, useCallback, useEffect } from "react";
import { fetchJoke } from "../services/jokes_queries";

/**
 * A custom React hook to fetch and manage jokes from an API.
 * 
 * This hook provides the current joke, loading state, and any errors during
 * the fetch process. It also provides a method to manually fetch a new joke.
 * 
 * @returns {Object} Hook return value.
 * @returns {string} return.joke - The current joke text.
 * @returns {boolean} return.loading - Indicates whether a joke is currently being fetched.
 * @returns {string} return.error - Error message if fetching the joke fails.
 * @returns {Function} return.getJoke - Function to fetch a new joke.
*/

export const useJoke = () => {
    const [joke, setJoke] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>('');

    const getJoke = useCallback(async () => {
        try {
            setLoading(true);
            const jokeData = await fetchJoke();
            setJoke(jokeData);
            setLoading(false);
        } catch (err) {
            setError(`Failed to fetch joke: ${err}`);
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        getJoke();
    }, [getJoke]);

    return { joke, loading, error, getJoke };
};
