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

export const requestVerificationCode = async ({email, code}) => {
    try {
        const response = await axios.post(`${backendUrl}/auth/email/check`, {email, code});
        return response.data;
    } catch (error) {
        console.error("인증 코드 불일치 :", error);
        throw error;
    }
};

