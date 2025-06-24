import axios from "axios";
import { getLocalStorage, saveLocalStorage } from "@/utils/hooks/localStorage";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = getLocalStorage("token");
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (err) => Promise.reject(err)
);

axiosInstance.interceptors.response.use(
    response => {
      if (response.status === 201 && response.data.token) {
        saveLocalStorage('token', response.data.token)
      }
      return response.data
    },
    err => Promise.reject(err.response ? err.response.data : err.message)
);

export default axiosInstance;