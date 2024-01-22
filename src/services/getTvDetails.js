import axiosInstance from "../api/axiosInstance";

export async function getTvDetails(id) {
  try {
    const response = await axiosInstance.get(`/tv/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
