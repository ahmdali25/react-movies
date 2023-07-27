import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL,
  params: {
    api_key: import.meta.env.VITE_APP_API_KEY,
  },
  headers: {
    Authorization : `Bearer ${import.meta.env.VITE_APP_API_TOKEN}`
  },
});

export default axiosInstance;