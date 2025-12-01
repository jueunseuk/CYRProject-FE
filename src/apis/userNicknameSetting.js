import axios from "axios";
import instance from "./instance";

const backendUrl = import.meta.env.VITE_BACKEND_BASE_URL;

export const getUserNicknameColor = async () => {
    try {
        const response = await instance.get(`/user/setting/nickname`);
        return response;
    } catch (error) {
        throw error;
    }
};

export const postUserNicknameColor = async (form) => {
    try {
        const response = await instance.post(`/user/setting/nickname`, form, {headers: { 'Content-Type': 'application/json' }});
        return response;
    } catch (error) {
        throw error;
    }
};
