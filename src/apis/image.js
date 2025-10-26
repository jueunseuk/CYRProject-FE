import axios from "axios";
import instance from "./instance";

const backendUrl = import.meta.env.VITE_BACKEND_BASE_URL;

export const uploadImage = async (form) => {
    try {
        const response = await instance.post(`/image`, form);
        return response;
    } catch (error) {
        const errorCode = error.response.code;
        
        if(errorCode === "USER_001") {
            alert(error.response.message);
        }

        throw error;
    }
};