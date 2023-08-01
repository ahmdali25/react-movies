import axiosInstance from "../api/axiosInstance";

export async function getSearchMovie(query) {
    try {
        const response = await axiosInstance.get(`/search/movie?query=${query}`);
        return response.data.results;
    } catch (error) {
        console.log(error);
    }
}