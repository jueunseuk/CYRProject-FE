import axios from "axios";

const instance = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_BASE_URL,
    withCredentials: true,
});

instance.interceptors.request.use(
    (config) => {
        return config;
    },
    (error) => Promise.reject(error)
);

instance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if ((error.response?.status === 401 || error.response?.status === 403) && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
          await axios.post(
            `${import.meta.env.VITE_BACKEND_BASE_URL}/auth/token/access/reset`,
            {},
            { withCredentials: true }
          );

        return instance(originalRequest);
      } catch (refreshError) {
          console.error("재발급 실패", refreshError);
          localStorage.removeItem("userInfo");
      }
    }

    return Promise.reject(error);
  }
);

export default instance;
