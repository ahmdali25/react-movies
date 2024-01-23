import axiosInstance from "../api/axiosInstance";

export async function getSearchMovie(type, query) {
  try {
    const response = await axiosInstance.get(`/search/${type}?query=${query}`);
    return response.data.results;
  } catch (error) {
    console.log(error);
  }
}
