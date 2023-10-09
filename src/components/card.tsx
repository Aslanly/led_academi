import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppState, Movie } from "../types/types";
import { fetchData } from '../services/api';
import { setMovies } from '../store/Actions';

const Card = () => {

    const movies = useSelector((state: AppState) => state.movies);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchDataAndSetMovies = async () => {
            try {
                const response = await fetchData();
                dispatch(setMovies(response));
            } catch (error) {
                console.error("Произошла ошибка при загрузке данных:", error);
            }
        };

        fetchDataAndSetMovies();
    }, [dispatch]);

    return (
        <div>
            {movies.map((movie: Movie) => (
                <div className="Card" key={movie.id}>
                    <h2 className="Card-title">{movie.name}</h2>
                    <div className="Card-content">
                        {movie.poster && movie.poster.previewUrl && (
                            <img style={{ width: '200px' }} src={movie.poster.previewUrl} alt="poster" />
                        )}
                        <div className="Description">
                            <div className="Year">
                                <p>Год:</p>
                                <div>{movie.year}</div>
                            </div>
                            <div>
                                {movie.countries.slice(0, 1).map((country, index) => (
                                    <div key={index} className="Country">
                                        <p>Страна:</p>
                                        {country.name}
                                    </div>
                                ))}
                            </div>
                            <div>{movie.genres.slice(0, 1).map((gener, index) => (
                                <div key={index} className="Genres">
                                    <p>Жанр:</p>
                                    {gener.name}
                                </div>  
                            ))}</div>
                            <div className="Description-title">
                                <div>{movie.description}</div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Card;