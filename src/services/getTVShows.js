import axiosInstance from "../api/axiosInstance";

export async function getTvShows(id) {
  try {
    const response = await axiosInstance.get(`/tv/${id}`);
    return response.data.results;
  } catch (error) {
    console.log(error);
  }
}
