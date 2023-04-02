import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import moviesApi from './moviesService';






export const fetchMovies = createAsyncThunk('movies/fetchMovies', async (page) => {
        const response = await moviesApi.getMovies(page);
        return response;
    }
);

export const fetchTopRated = createAsyncThunk('movies/fetchTopRated', async (page) => {
        const response = await moviesApi.moviesTopRated(page);
        return response;

    }
);

// export const fetchActorMovies = createAsyncThunk('movies/fetchActorMovies', async (id) => {
//         const response = await moviesApi.actorMovies(id);
//         console.log(response);
//         return response;
//     }
// );



const moviesSlice = createSlice({
    name: 'movies',
    initialState: {
        data: {
            results: [],
        }
    },
    reducers: {
        reset: (state) => {
            state.isError = false;
            state.isLoading = false;
            state.isSuccess = false;
            state.data = null;
        }
    },
    extraReducers: builder =>{
        builder
        // Fetch Movies
        .addCase(fetchMovies.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(fetchMovies.fulfilled,(state, { payload }) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.data.results = [...state.data.results, ...payload.results];
        })
        .addCase(fetchMovies.rejected, (state) => {
            state.isLoading = false;
            state.isError = true;
            state.data = null;
        })
        // movies Top Rated
            .addCase(fetchTopRated.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchTopRated.fulfilled,(state, { payload }) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.data.results = [...state.data.results, ...payload.results];
            })
            .addCase(fetchTopRated.rejected, (state) => {
                state.isLoading = false;
                state.isError = true;
                state.data = null;
            })
    },
});

export default moviesSlice.reducer;

