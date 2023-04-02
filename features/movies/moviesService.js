import { popularMovies } from '../../api/tmdb';


 const getMovies = async (page) => {
    const response = await popularMovies.get(`movie/popular?page=${page}`)
    return response.data
}

 const actorMovies = async (id) => {
    const response = await popularMovies.get(`movie/${id}/credits`)
    return response.data
}

const detailMovies = async (id) => {
    const response = await popularMovies.get(`movie/${id}`)
    return response.data
}

const detailActor = async (id) => {
    const response = await popularMovies.get(`person/${id}`)
    return response.data
}

const getAllMoviesForOneActor = async (id) => {
    const response = await popularMovies.get(`person/${id}/movie_credits`)
    return response.data
}

const searchMovies = async (query) => {
    const response = await popularMovies.get(`search/movie?query=${query}`)
    return response.data
}

const moviesTopRated = async (page) => {
    const response = await popularMovies.get(`movie/top_rated?page=${page}`)
    return response.data
}

const getMovieTrailer = async (id) => {
    const response = await popularMovies.get(`movie/${id}/videos`)
    return response.data
}

const getMoviesUpcoming = async () => {
    const response = await popularMovies.get(`movie/upcoming`)
    return response.data
}

const moviesApi = {
    getMovies,
    actorMovies,
    detailMovies,
    detailActor,
    getAllMoviesForOneActor,
    searchMovies,
    moviesTopRated,
    getMovieTrailer,
    getMoviesUpcoming
}

export default moviesApi;