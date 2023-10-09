import { ActionTypes, AppState, Action } from "../types/types";

const initialState: AppState = {
    movies: [],
};

const rootReducer = (state = initialState, action: Action): AppState => {
    switch (action.type) {
        case ActionTypes.SET_MOVIES:
            return {
                ...state,
                movies: action.payload || [],
            };
        default:
            return state;
    }
};

export default rootReducer;