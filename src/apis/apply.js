import axios from "axios";
import instance from "./instance";

const backendUrl = import.meta.env.VITE_BACKEND_BASE_URL;

export const getApply = async (applyId) => {
    try {
        const response = await instance.get(`/apply/${applyId}`);
        return response;
    } catch (error) {
        const errorCode = error.response.code;
        
        if(errorCode === "USER_001") {
            alert(error.response.message);
        }

        throw error;
    }
};

export const getApplyList = async (form) => {
    try {
        const response = await instance.get(`/apply/all`, {params: form});
        return response;
    } catch (error) {
        const errorCode = error.response.code;
        
        if(errorCode === "USER_001") {
            alert(error.response.message);
        }

        throw error;
    }
};

export const uploadApply = async (form) => {
    try {
        const response = await instance.post(`/apply`, form);
        return response;
    } catch (error) {
        const errorCode = error.response.data.code;
        
        if(errorCode) {
            alert(error.response.data.message);
        }

        throw error;
    }
};

export const confirmApply = async (applyId) => {
    try {
        const response = await instance.patch(`/apply/${applyId}/confirm`);
        return response;
    } catch (error) {
        const errorCode = error.response.code;
        
        if(errorCode === "USER_001") {
            alert(error.response.message);
        }

        throw error;
    }
};
