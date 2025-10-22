import axios from "axios";
import instance from "./instance";

const backendUrl = import.meta.env.VITE_BACKEND_BASE_URL;

export const getStatistic = async () => {
    try {
        const response = await axios.get(`${backendUrl}/statistic`);
        return response.data;
    } catch (error) {

    }
};
