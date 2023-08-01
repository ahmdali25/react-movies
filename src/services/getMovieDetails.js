import axiosInstance from "../api/axiosInstance";

export async function getMovieDetails(id) {
    try {
        const response = await axiosInstance.get(`/movie/${id}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}