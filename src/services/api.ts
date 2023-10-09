import axios from "axios";
import { Movie, ApiResponse } from "../types/types";

const apiUrl = 'https://api.kinopoisk.dev/v1.3/movie';
const apiKey = 'RTWX161-BF3MM62-K8VQ7HP-83VA5DC';

export const fetchData = async (): Promise<Movie[]> => {
    try {
        const response = await axios.get<ApiResponse>(apiUrl, {
            headers: {
                'X-API-KEY': apiKey,
            },
        });
        const movies = response.data.docs;
        console.log(movies)
        return movies
    } catch (error) {
        console.error("Произошла ошибка при запросе к API:", error);
        throw error;
    }
};

