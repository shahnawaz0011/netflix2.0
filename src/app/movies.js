import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from './action/movies';
export const movies = configureStore({
    reducer:{
        movies : moviesReducer,
    }
})