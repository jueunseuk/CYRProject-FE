import axios from "axios";
import instance from "./instance";

const backendUrl = import.meta.env.VITE_BACKEND_BASE_URL;

export const getSearchResult = async (form) => {
    try {
        const response = await instance.get(`${backendUrl}/search`, {params: form});
        return response;
    } catch (error) {
        const errorCode = error.response.code;
        
        if(errorCode === "USER_001") {
            alert(error.response.data.message);
        }

        throw error;
    }
};
