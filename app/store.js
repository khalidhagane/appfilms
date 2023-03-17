import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "../features/movies/moviesSlice";
// import searchMoviesreducer from "../features/movies/searchMovies"

const store = configureStore({
    reducer: {
        movies: moviesReducer,
        // moviesSearch:searchMoviesreducer
    },
});

export default store;
