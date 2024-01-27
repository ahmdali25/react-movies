import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL,
  params: {
    api_key: import.meta.env.VITE_APP_API_KEY,
  },
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_APP_API_TOKEN}`,
  },
});

// fetch data
const fetchData = async (endpoint, additionalParams = {}) => {
  try {
    const response = await axiosInstance.get(endpoint, {
      params: {
        ...axiosInstance.defaults.params,
        ...additionalParams,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export default fetchData;
