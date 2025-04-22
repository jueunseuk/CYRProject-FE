import axios from "axios";
import instance from "./instance";

const backendUrl = import.meta.env.VITE_BACKEND_BASE_URL;

export const getCalendar = async (year, month) => {
    try {
        const response = await axios.get(`${backendUrl}/calendar/request/monthly`, {
            params: {year, month},
            headers: {Accept: "application/json"}
        });
        return response;
    } catch(error) {
        if(error.response && error.response.data) {
            console.log("캘린더 데이터를 불러오는 데 실패했습니다.");
        } else {
            console.log("서버가 응답하지 않습니다.");
        }
    }
};

export const getCalendarRequest = async () => {
    try {
        const response = await axios.get(`${backendUrl}/calendar/request`, {
            headers: {Accept: "application/json"}
        });
        return response;
    } catch(error) {
        if(error.response && error.response.data) {
            console.log("캘린더 요청 목록을 불러오는 데 실패했습니다.");
        } else {
            console.log("서버가 응답하지 않습니다.");
        }
    }
};

export const getRecentSchedule = async () => {

};

export const getBeforeSchedule = async () => {

};

export const postUploadCalendar = async (formData) => {
    try {
        await instance.post("/calendar", formData, {headers: {Accept: "application/json"}});
    } catch (error) {
        if(error.response && error.response.data) {
            console.log("스케줄을 업로드하는 데 실패했습니다.");
        } else {
            console.log("서버가 응답하지 않습니다.");
        }
    }
}