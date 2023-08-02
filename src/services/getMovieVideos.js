import axiosInstance from "../api/axiosInstance";

export async function getMovieVideos(id) {
    try {
        const response = await axiosInstance.get(`/movie/${id}/videos`);
        return response.data.results;
    } catch (error) {
        console.log(error);
    }
}