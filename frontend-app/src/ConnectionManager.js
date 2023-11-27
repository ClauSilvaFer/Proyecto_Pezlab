import axios from 'axios';

export default class ConnectionManager {

    baseRequest = axios.create({
        baseURL: `http://localhost:8080/api`
    });

    getMovies = async () => {
        let response = await this.baseRequest.get('/movies');

        if (response.status !== 200)
            return null;
        return response.data;
    }

    getMovie = async (movieId) => {
        let response = await this.baseRequest.get(`/movies/${movieId}`);

        if (response.status !== 200)
            return null;
        return response.data;

    }

    createMovie = async (title, rating, review, yourName) => {
        let response = await this.baseRequest.post(`/movie/create`,{title, rating, review, yourName});

        if (response.status !== 200)
            return null;
        return response.data;

    }

    getReviews = async (idMovie) => {
        let response = await this.baseRequest.get(`/reviews/${idMovie}`);

        if (response.status !== 200)
            return null;
        return response.data;
    }

    createReview = async (idMovie, rating, review, yourName) => {
        let response = await this.baseRequest.post(`/review/create`,{rating, review, yourName, idMovie });

        if (response.status !== 200)
            return null;
        return response.data;
    }
}