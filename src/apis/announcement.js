import axios from "axios";
import instance from "./instance";

const backendUrl = import.meta.env.VITE_BACKEND_BASE_URL;

export const getFixedAnnouncementList = async () => {
    try {
        const response = await instance.get(`/announcement/fixed`);
        return response;
    } catch (error) {
        const errorCode = error.response.code;
        
        if(errorCode === "USER_001") {
            alert(error.response.message);
        }

        throw error;
    }
};

export const getAnnouncementList = async (form) => {
    try {
        const response = await instance.get(`/announcement/all`, {params: form});
        return response;
    } catch (error) {
        const errorCode = error.response.code;
        
        if(errorCode === "USER_001") {
            alert(error.response.message);
        }

        throw error;
    }
};

export const getAnnouncement = async (announcementId) => {
    try {
        const response = await instance.get(`/announcement/${announcementId}`);
        return response;
    } catch (error) {
        const errorCode = error.response.code;
        
        if(errorCode === "USER_001") {
            alert(error.response.message);
        }

        throw error;
    }
};

export const uploadAnnouncement = async (form) => {
    try {
        const response = await instance.post(`/announcement`, form);
        return response;
    } catch (error) {
        const errorCode = error.response.code;
        
        if(errorCode === "USER_001") {
            alert(error.response.message);
        }

        throw error;
    }
};

export const updateAnnouncement = async (announcementId, form) => {
    try {
        const response = await instance.patch(`/announcement/${announcementId}`, form);
        return response;
    } catch (error) {
        const errorCode = error.response.code;
        
        if(errorCode === "USER_001") {
            alert(error.response.message);
        }

        throw error;
    }
};

export const deleteAnnouncement = async (announcementId) => {
    try {
        const response = await instance.delete(`/announcement/${announcementId}`);
        return response;
    } catch (error) {
        const errorCode = error.response.code;
        
        if(errorCode === "USER_001") {
            alert(error.response.message);
        }

        throw error;
    }
};

