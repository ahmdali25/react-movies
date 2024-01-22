import axiosInstance from "../api/axiosInstance";

export async function getTvCredits(id) {
  try {
    const response = await axiosInstance.get(`/tv/${id}/credits`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
