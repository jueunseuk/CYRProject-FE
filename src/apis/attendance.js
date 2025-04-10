import axios from "axios";
import instance from "./instance";

const backendUrl = import.meta.env.VITE_BACKEND_BASE_URL;

export const requestAttendance = async (data) => {
    try {
        await instance.post("/attendance", {comment: data});
        
        alert("출석 완료!");
    } catch(error) {
        if(error.response && error.response.data) {
            const errorCode = error.response.data.code;
            
            if(errorCode === 'ATT_001') {
                alert("오늘 이미 출석을 완료했습니다!");
            } else if(errorCode === 'ATT_002') {
                alert("내용을 작성해주세요!");
            }

            throw error;
        } else {
            alert("서버가 원활하지 않습니다.\n 다시 시도해주세요.");
        }
    }
};

export const requestAttendanceCnt = async () => {
    try {
        const response = await axios.get(`${backendUrl}/attendance/statistic`, {headers: {Accept: "application/json"}});
        return response;
    } catch(error) {
        if(error.response && error.response.data) {
            console.log("출석 통계를 불러오는 데 실패했습니다.");
        } else {
            console.log("서버가 응답하지 않습니다.");
        }
    }
}

export const requestAttendanceList = async () => {
    try {
        const response = await axios.get(`${backendUrl}/attendance/today`, {headers: {Accept: "application/json"}});
        return response;
    } catch(error) {
        if(error.response && error.response.data) {
            console.log("출석 리스트를 불러오는 데 실패했습니다.");
        } else {
            console.log("서버가 응답하지 않습니다.");
        }
    }
}