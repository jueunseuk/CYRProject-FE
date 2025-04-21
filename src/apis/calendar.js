import axios from "axios";
import instance from "./instance";

const backendUrl = import.meta.env.VITE_BACKEND_BASE_URL;

export const getCalendar = async (year, month) => {
    try {
        const response = await axios.get(`/${backendUrl}/calendar`, {
            params: {year, month},
            headers: {Accept: "application/json"}
        });
        return response;
    } catch(error) {
        console.log("에러 발생: "+error.response);
    }
};

export const getRecentSchedule = async () => {

};

export const getBeforeSchedule = async () => {

};