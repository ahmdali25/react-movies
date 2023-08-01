import axiosInstance from "../api/axiosInstance";

export async function getTrendingMovies() {
    try {
        const response = await axiosInstance.get("/trending/movie/day");
        return response.data.results;
    } catch (error) {
        console.log(error);
    }
}