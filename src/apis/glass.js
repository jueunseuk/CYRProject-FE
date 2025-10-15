import axios from "axios";
import instance from "./instance";

const backendUrl = import.meta.env.VITE_BACKEND_BASE_URL;

export const getUserGlassData = async (userId) => {
    try {
        const response = await instance.get(`/glass/data/${userId}`);
        return response;
    } catch (error) {
        const errorCode = error.response.code;
        
        if(errorCode === "USER_001") {
            alert(error.response.message);
        }

        throw error;
    }
};

export const getUserGlassHisotry = async (userId) => {
    try {
        const response = await instance.get(`/glass/history/${userId}`);
        return response;
    } catch (error) {
        const errorCode = error.response.code;
        
        if(errorCode === "USER_001") {
            alert(error.response.message);
        }

        throw error;
    }
};

export const getAllGlassLog = async (form) => {
    try {
        const resopnse = await instance.get(`/glass/all`, {params: form, headers: {Accept: "application/json"}});
        return resopnse;
    } catch(error) {
        if(error && error.response) {

        } else {
            console.log("서버가 응답하지 않습니다.")
        }
    }
}