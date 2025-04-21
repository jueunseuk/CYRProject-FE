import axios from "axios";
import instance from "./instance";

const backendUrl = import.meta.env.VITE_BACKEND_BASE_URL;

export const getCalendar = async (year, month) => {
    try {
        const response = await axios.get(`${backendUrl}/calendar/monthly`, {
            params: {year, month},
            headers: {Accept: "application/json"}
        });
        return response;
    } catch(error) {
        if(error.response && error.response.data) {
            console.log("게시글 목록을 불러오는 데 실패했습니다.");
        } else {
            console.log("서버가 응답하지 않습니다.");
        }
    }
};

export const getRecentSchedule = async () => {

};

export const getBeforeSchedule = async () => {

};