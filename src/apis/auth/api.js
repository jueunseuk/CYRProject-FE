import axios from "axios";

const backendUrl = import.meta.env.VITE_BACKEND_BASE_URL;

export const requestEmailCode = async (email) => {
    try {
        const response = await axios.post(`${backendUrl}/auth/email/request`, { email });
        return response.data;
    } catch (error) {
        console.error("인증코드 요청 실패:", error);
        throw error;
    }
};
