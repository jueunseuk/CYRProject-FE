import axios from "axios";
import instance from "./instance";

const backendUrl = import.meta.env.VITE_BACKEND_BASE_URL;

export const postEmpathy = async (postId) => {
    try {
        const response = await instance.post(`/empathy/${postId}`);
        return response;
    } catch (error) {
        console.log(error)
        const errorCode = error.response.code;
        if(errorCode === "EMP_001") {
            alert(error.response.message);
        }

        throw error;
    }
};

export const deleteEmpathy = async (postId) => {
    try {
        const response = await instance.delete(`/empathy/${postId}`);
        return response;
    } catch (error) {
        const errorCode = error.response.code;
        if(errorCode === "EMP_002") {
            alert(error.response.message);
        }

        throw error;
    }
};
