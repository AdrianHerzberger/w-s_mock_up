/**
 * A function which provides the jokes from chucknorris.io. 
 * @returns {variable} The variable to be used fetching jokes by its category. 
 * @returns {Function} This return.fetchJokeFromApi function provides the actual query to fetch jokes from the http request.
 * 
*/

export const fetchJoke = (): Promise<string> => {

    const fetchJokeFromApi = async (): Promise<string> => {
        const category = 'dev';
        const jokeUrl = `https://api.chucknorris.io/jokes/random?category=${category}`;

        try {
            const response = await fetch(jokeUrl);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();
            return data.value; 
        } catch (error) {
            console.error('Error fetching joke:', error);
            throw error;
        }
    };

    return fetchJokeFromApi();
}