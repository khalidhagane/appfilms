import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchMovies = createAsyncThunk('movies/fetchMovies', async () => {
    const response = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=9fb7ddbe7eae0462355b142582be0d1c&language=en-US&page=1')
    return response.data;
})

const moviesSlice = createSlice({
    name : 'movies',
    initialState: {
        data : {
            results : []
        }
    },
    reducers : (state) => {
        state.isLoading = false
        state.isSuccess = false
        state.data = null
    },
    extraReducers : builder => {
        builder
        .addCase(fetchMovies.pending, (state) => {
            state.isLoading = true
        })
        .addCase(fetchMovies.fulfilled,(state, { payload }) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.data = payload;

        })
        .addCase(fetchMovies.rejected, (state) => {
            state.isLoading = false;
            state.data = null;
        })
    }

})

export default moviesSlice.reducer