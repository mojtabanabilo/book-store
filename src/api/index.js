import axios from "axios";
import { useAuthStore } from "@/stores/auth";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const store = useAuthStore();
    if (store.token) config.headers.Authorization = `Bearer ${store.token}`;
    return config;
  },
  (err) => Promise.reject(err)
);

axiosInstance.interceptors.response.use(
    response => {
    if (response.status === 201 && response.data.token) {
      const store = useAuthStore();
      store.setToken(response.data.token);
    }
      return response.data
  },
    err => Promise.reject(err.response ? err.response.data : err.message)
);

export default axiosInstance;