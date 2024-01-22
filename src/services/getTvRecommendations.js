import axiosInstance from "../api/axiosInstance";

export async function getTvRecommendations(id) {
  try {
    const response = await axiosInstance.get(`/tv/${id}/recommendations`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
