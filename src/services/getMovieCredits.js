import axiosInstance from "../api/axiosInstance";

export async function getMovieCredits(id) {
    try {
        const response = await axiosInstance.get(`/movie/${id}/credits`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}