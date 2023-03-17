import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


// const searchData = async (searchTerm) => {
//     const response = await fetch(
//       `https://api.themoviedb.org/3/search/movie?api_key=9fb7ddbe7eae0462355b142582be0d1c&language=en-US&query=${searchTerm}&page=1&include_adult=false`
//     );
//     const data = await response.json();
//     setMovies(data.results); 
//   };
export const searchData = createAsyncThunk('movies/searchData', async () => {
    const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=9fb7ddbe7eae0462355b142582be0d1c&language=en-US&query=${searchTerm}&page=1&include_adult=false`)
    return response.data;
})

const searchMovies = createSlice({
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
        .addCase(searchData.pending, (state) => {
            state.isLoading = true
        })
        .addCase(searchData.fulfilled,(state, { payload }) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.data = payload;

        })
        .addCase(searchData.rejected, (state) => {
            state.isLoading = false;
            state.data = null;
        })
    }

})

export default searchMovies.reducer