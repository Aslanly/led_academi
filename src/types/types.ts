export interface ApiResponse {
    docs: Movie[];
    total: number;
    limit: number;
    page: number;
    pages: number;
}


export interface Movie {
    id: number,
    name: string,
    countries: Country[],
    description: string,
    poster: {
        previewUrl: string
    },
    year: number
    genres: Gener[];
}

export interface Gener {
    name: string
}

export interface Country {
    name: string
}

export interface AppState {
    movies: Movie[];
}

export enum ActionTypes {
    SET_MOVIES = "SET_MOVIES",
    SET_COUNTRIES = "SET_COUNTRIES"
}

export interface Action {
    type: ActionTypes;
    payload?: Movie[];
}



