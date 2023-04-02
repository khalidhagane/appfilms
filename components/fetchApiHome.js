import moviesApi from '../features/movies/moviesService';

const fetchMoviesTopRated = async () => {
    const response = await moviesApi.moviesTopRated();
    return response;
}

const fetchMoviesUpcoming = async () => {
    const response = await moviesApi.getMoviesUpcoming();
    return response;
}


const apiHome = {
    fetchMoviesTopRated,
    fetchMoviesUpcoming
}

export default apiHome;