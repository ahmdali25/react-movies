import { axiosInstance } from "../api/axiosInstance";

export default async function getTrendingMovies(callback) {
    try {
        const response = await axiosInstance.get("/trending/movie/day");
        const data = await response.data.results;
        callback(data);
    } catch (error) {
        console.log(error);
    }
}