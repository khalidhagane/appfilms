import { REACT_APP_API_KEY } from '@env';
import axios from 'axios';


export const popularMovies = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    params: {
        api_key: REACT_APP_API_KEY,
    }
})


