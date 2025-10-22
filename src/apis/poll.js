import axios from "axios";
import instance from "./instance";

const backendUrl = import.meta.env.VITE_BACKEND_BASE_URL;

export const getActivePollList = async (form) => {
    try {
        const response = await instance.get(`/poll/active`, {params: form, headers: {Accept: "application/json"}});
        return response;
    } catch (error) {
        const errorCode = error.response.data.code;
        
        if(error && error.response) {

        } else {
            console.log("서버가 응답하지 않습니다.");
        }

        throw error;
    }
};

export const getResultPollList = async (form) => {
    try {
        const response = await instance.get(`/poll/result`, {params: form, headers: {Accept: "application/json"}});
        return response;
    } catch (error) {
        const errorCode = error.response.data.code;
        
        if(error && error.response) {

        } else {
            console.log("서버가 응답하지 않습니다.");
        }

        throw error;
    }
};

export const votePoll = async (pollId, pollOptionId) => {
    try {
        const response = await instance.post(`/poll/${pollId}/${pollOptionId}`);
        return response;
    } catch (error) {
        const errorCode = error.response.data.code;
        
        if(error && error.response) {

        } else {
            console.log("서버가 응답하지 않습니다.");
        }

        throw error;
    }
};

export const aggregatePoll = async (pollId) => {
    try {
        const response = await instance.post(`/poll/${pollId}/aggregate`);
        return response;
    } catch (error) {
        const errorCode = error.response.data.code;
        
        if(error && error.response) {
            if(errorCode === "POLL_008") {
                alert("집계할 투표 로그가 존재하지 않습니다.\n투표를 취소해주세요.")
            } else if(errorCode === "POLL_002") {
                alert("중간 집계를 할 권한이 없습니다.")
            } else if(errorCode === "POLL_007") {
                alert("중간 집계를 할 수 없는 상태의 투표입니댜.")
            }
        } else {
            console.log("서버가 응답하지 않습니다.");
        }

        throw error;
    }
};

export const aggregatePreviewPoll = async (pollId) => {
    try {
        const response = await instance.post(`/poll/${pollId}/aggregate-preview`);
        return response;
    } catch (error) {
        const errorCode = error.response.data.code;
        
        if(error && error.response) {
            if(errorCode === "POLL_008") {
                alert("집계할 투표 로그가 존재하지 않습니다.")
            } else if(errorCode === "POLL_002") {
                alert("중간 집계를 할 권한이 없습니다.")
            } else if(errorCode === "POLL_007") {
                alert("중간 집계를 할 수 없는 상태의 투표입니댜.")
            }
        } else {
            console.log("서버가 응답하지 않습니다.");
        }

        throw error;
    }
};

export const uploadPoll = async (form) => {
    try {
        const response = await instance.post(`/poll`, form);
        return response;
    } catch (error) {
        const errorCode = error.response.data.code;
        
        if(error && error.response) {

        } else {
            console.log("서버가 응답하지 않습니다.");
        }

        throw error;
    }
};

export const updatePoll = async (pollId, status) => {
    try {
        const response = await instance.patch(`/poll/${pollId}/status`, {status}, {headers: {Accept: "application/json"}});
        return response;
    } catch (error) {
        const errorCode = error.response.data.code;
        console.log(error)
        if(error && error.response) {

        } else {
            console.log("서버가 응답하지 않습니다.");
        }

        throw error;
    }
};

