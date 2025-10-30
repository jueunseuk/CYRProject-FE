import axios from "axios";
import instance from "./instance";

const backendUrl = import.meta.env.VITE_BACKEND_BASE_URL;

export const getMemberList = async (form) => {
    try {
        const response = await instance.get(`/manager/members`, {params: form});
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
        const response = await instance.patch(`/manager/user/${memberId}/status`, null, {params: form});
        return response;
    } catch (error) {
        const errorCode = error.response.code;
        
        if(errorCode === "USER_001") {
            alert(error.response.message);
        }

        throw error;
    }
};

export const updateUserWarnCnt = async (memberId, form) => {
    try {
        const response = await instance.patch(`/manager/user/${memberId}/warn`, null, {params: form});
        return response;
    } catch (error) {
        const errorCode = error.response.code;
        
        if(errorCode === "USER_001") {
            alert(error.response.message);
        }

        throw error;
    }
};
