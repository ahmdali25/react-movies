import axiosInstance from "../api/axiosInstance";

export async function getMovieRecommendations(id) {
    try {
        const response = await axiosInstance.get(`/movie/${id}/recommendations`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}