import axios from "axios";
import { getRecoil, setRecoil } from "recoil-nexus";
import { userState } from "@/recoil/atom";

const instance = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_BASE_URL,
    withCredentials: true,
});

instance.interceptors.request.use(
    (config) => {
        const { accessToken } = getRecoil(userState);
        if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

instance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const res = await axios.post(
          `${import.meta.env.VITE_BACKEND_BASE_URL}/auth/token/access/reset`,
          {},
          { withCredentials: true }
        );

        const newAccessToken = res.headers["authorization"];
        if (newAccessToken) {
          setRecoil(userState, (prev) => ({
            ...prev,
            accessToken: newAccessToken,
          }));

          originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
          return axios(originalRequest);
        }
      } catch (refreshError) {
        console.error("재발급 실패", refreshError);
      }
    }

    return Promise.reject(error);
  }
);

export default instance;
