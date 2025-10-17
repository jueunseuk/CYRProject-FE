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
            console.log("캘린더 데이터를 불러오는 데 실패했습니다.");
        } else {
            console.log("서버가 응답하지 않습니다.");
        }
    }
};

export const getCalendarRequest = async () => {
    try {
        const response = await axios.get(`${backendUrl}/calendar/request/all`, {
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

export const patchRequestProcess = async (params) => {
    try {
        await instance.patch("/calendar/request/process", null, {params: params, headers: {Accept: "application/json"}});
    } catch(error) {
        if(error.response && error.response.data) {
            console.log("일정 추가 요청을 처리하는 데 실패했습니다.");
        } else {
            console.log("서버가 응답하지 않습니다.");
        }
    }
};

export const postCalendarRequest = async (data) => {
    try {
        await instance.post("/calendar/request", data, {
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            }
        });
    } catch (error) {
        if(error.response && error.response.data) {
            console.log("스케줄 요청을 업로드하는 데 실패했습니다.", error);
        } else {
            console.log("서버가 응답하지 않습니다.");
        }
    }
};

export const postCalendar = async (formData) => {
    try {
        await instance.post("/calendar", formData, {headers: {Accept: "application/json"}});
    } catch (error) {
        if(error.response && error.response.data) {
            console.log(error)
            console.log("스케줄을 업로드하는 데 실패했습니다.");
        } else {
            console.log("서버가 응답하지 않습니다.");
        }
    }
};

export const getBeforeCalendar = async (params) => {
    try {
        const response = await axios.get(`${backendUrl}/calendar/before`, {params: params, headers: {Accept: "application/json"}});
        return response;
    } catch(error) {
        if(error.response && error.response.data) {
            console.log("지난 스케줄을 가져오는데 실패했습니다.");
        } else {
            console.log("서버가 응답하지 않습니다.");
        }
    }
};

export const getAfterCalendar = async (params) => {
    try {
        const response = await axios.get(`${backendUrl}/calendar/after`, {params: params, headers: {Accept: "application/json"}});
        return response;
    } catch(error) {
        if(error.response && error.response.data) {
            console.log("다가오는 스케줄을 가져오는데 실패했습니다.");
        } else {
            console.log("서버가 응답하지 않습니다.");
        }
    }
};

export const deleteCalendar = async (params) => {
    try {
        await instance.delete(`${backendUrl}/calendar`, {params: params, headers: {Accept: "application/json"}});
    } catch(error) {
        if(error.response && error.response.data) {
            if(error.response.data.code === 'CAL_001') {
                console.log("요청을 처리할 권한이 없습니다.")
            }
        } else {
            console.log("서버가 응답하지 않습니다.");
        }
    }
}

export const editCalendar = async (calendarId, formData) => {
    try {
        await instance.patch(`${backendUrl}/calendar/${calendarId}`, formData, { headers: {Accept: "application/json"} });
    } catch(error) {
        if(error.response && error.response.data) {
            const errorCode = error.response.data.code;
            if(errorCode === 'CAL_001') {
                alert("존재하지 않는 일정입니다.");
            } else if(errorCode === 'CAL_004') {
                alert("수정할 권한이 없습니다.");
            }

            throw error;
        } else {
            console.log("서버가 응답하지 않습니다.");
        }
    }
}