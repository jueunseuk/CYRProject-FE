import axios from "axios";
import instance from "./instance";

const backendUrl = import.meta.env.VITE_BACKEND_BASE_URL;

export const getUnreadNotificationList = async () => {
    try {
        const response = await instance.get(`/notification/unread/all`);
        return response;
    } catch (error) {
        const errorCode = error.response.code;
        
        if(error && error.response) {

        } else {
            console.log("서버가 응답하지 않습니다.");
        }

        throw error;
    }
};

export const getAllNotificationList = async () => {
    try {
        const response = await instance.get(`/notification/all`);
        return response;
    } catch (error) {
        const errorCode = error.response.code;
        
        if(error && error.response) {

        } else {
            console.log("서버가 응답하지 않습니다.");
        }

        throw error;
    }
};

export const patchReadNotification = async (form) => {
    try {
        const response = await instance.patch(`/notification/read/all`, form);
        return response;
    } catch (error) {
        const errorCode = error.response.code;
        
        if(error && error.response) {

        } else {
            console.log("서버가 응답하지 않습니다.");
        }

        throw error;
    }
};

