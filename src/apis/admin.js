import axios from "axios";
import instance from "./instance";

const backendUrl = import.meta.env.VITE_BACKEND_BASE_URL;

export const getManagerList = async (form) => {
    try {
        const response = await instance.get(`/admin/managers`, {params: form});
        return response;
    } catch (error) {
        const errorCode = error.response.code;
        
        if(errorCode === "USER_001") {
            alert(error.response.message);
        }

        throw error;
    }
};

export const updateUserStatus = async (memberId, form) => {
    try {
        const response = await instance.patch(`/admin/user/${memberId}/status`, null, {params: form});
        return response;
    } catch (error) {
        const errorCode = error.response.code;
        
        if(errorCode === "USER_001") {
            alert(error.response.message);
        }

        throw error;
    }
};

export const updateUserRole = async (memberId, form) => {
    try {
        const response = await instance.patch(`/admin/user/${memberId}/role`, null, {params: form});
        return response;
    } catch (error) {
        const errorCode = error.response.code;
        
        if(errorCode === "USER_001") {
            alert(error.response.message);
        }

        throw error;
    }
};
