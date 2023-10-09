import { createStore } from "redux";
import rootReducer from "./Redusers";
import { AppState } from "../types/types";

const initialState: AppState = {
    movies: [],
};

const store = createStore(rootReducer, initialState);

export default store;