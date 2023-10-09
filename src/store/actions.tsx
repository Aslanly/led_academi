import { ActionTypes, Movie } from "../types/types";

export const setMovies = (movies: Movie[]) => ({
    type: ActionTypes.SET_MOVIES,
    payload: movies,
});
