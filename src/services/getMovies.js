import axiosInstance from "../api/axiosInstance";

export async function getMovies(id) {
    try {
        const response = await axiosInstance.get(`/movie/${id}`);
        return response.data.results;
    } catch (error) {
        console.log(error);
    }
}