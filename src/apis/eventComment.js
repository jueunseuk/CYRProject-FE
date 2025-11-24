import axios from "axios";
import instance from "./instance";

const backendUrl = import.meta.env.VITE_BACKEND_BASE_URL;

export const getEventCommentList = async (eventId) => {
    try {
        const response = await instance.get(`/event/${eventId}/comment/all`);
        return response;
    } catch (error) {
        const errorCode = error.response.code;
        
        if(errorCode === "USER_001") {
            alert(error.response.message);
        }

        throw error;
    }
};

export const uploadEventComment = async (eventId, form) => {
    try {
        const response = await instance.post(`/event/${eventId}/comment`, form, {headers: {"Content-Type": "multipart/form-data"}});
        return response;
    } catch (error) {
        const errorCode = error.response.code;
        
        if(errorCode === "USER_001") {
            alert(error.response.message);
        }

        throw error;
    }
};

export const deleteEventComment = async (eventId, eventCommentId) => {
    try {
        const response = await instance.delete(`/event/${eventId}/comment/${eventCommentId}`);
        return response;
    } catch (error) {
        const errorCode = error.response.code;
        
        if(errorCode === "USER_001") {
            alert(error.response.message);
        }

        throw error;
    }
};
