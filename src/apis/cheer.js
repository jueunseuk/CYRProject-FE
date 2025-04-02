import axios from "axios";
import instance from "./instance";

const backendUrl = import.meta.env.VITE_BACKEND_BASE_URL;

export const requestCheer = () => {
    return instance.patch("/cheer/update");
}

export const requestCheerCnt = async () => {
    try {
        const response = await axios.get(`${backendUrl}/cheer`);
        return response;
    } catch(error) {
        
    }
}