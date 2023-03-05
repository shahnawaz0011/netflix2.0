import { createSlice } from "@reduxjs/toolkit";

export const moviesSlice  = createSlice({
    name:'movies',
    initialState: {
        movies: null
    },
    reducers: {
        addMovies: (state, actions) => {
          state.movies = actions.payload;
        },    
      },
})

export const {addMovies} = moviesSlice.actions;

export const selectMovies = (state) => state.movies;

export default moviesSlice.reducer;