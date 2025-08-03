import axios from "axios";
import {
  setTokenCookie,
  getTokenCookie,
  setRefreshTokenCookie,
} from "@/utils/hook/cookie";
import { saveLocalStorage } from "@/utils/hook/localStorage";
import { encryptPayload } from "@/utils/hook/encryption";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = getTokenCookie();
    if (token) config.headers.Authorization = `Bearer ${token}`;
    if (
      config.data &&
      config.headers["Content-Type"] === "application/json" &&
      !config.disableEncryption
    ) {
      config.data = {
        encrypted: encryptPayload(config.data),
      };
    }
    return config;
  },
  (err) => Promise.reject(err)
);

axiosInstance.interceptors.response.use(
  (response) => {
    if ((response.status === 201 || response.status === 200) && response.data.role){
      saveLocalStorage('role', response.data.role)
    }

    if ((response.status === 201 || response.status === 200) && response.data.accessToken) {
      setTokenCookie(response.data.accessToken);
    }
    if ((response.status === 201 || response.status === 200) && response.data.refreshToken) {
      setRefreshTokenCookie(response.data.refreshToken);
    }
    return response.data;
  },
  async (err) => {
    const originalRequest = err.config;
    if (err.response?.status === 403 && !originalRequest._retry) {
      originalRequest._retry = true;

      const refreshToken = getRefreshTokenCookie();
      if (!refreshToken) {
        clearAuthCookies();
        return Promise.reject({ message: "لطفا مجددا وارد شوید." });
      }
      try {
        const res = await axiosInstance.post(
          "auth/refresh",
          { refreshToken },
          { disableEncryption: true }
        );

        const newAccessToken = res.data.accessToken;
        setTokenCookie(newAccessToken);

        originalRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;
        return axiosInstance(originalRequest);
      } catch (refreshErr) {
        clearAuthCookies();
        return Promise.reject({
          message: "نشست شما منقضی شده است، لطفا دوباره وارد شوید.",
        });
      }
    }
    return Promise.reject(err.response ? err.response.data : err.message);
  }
);

export default axiosInstance;
