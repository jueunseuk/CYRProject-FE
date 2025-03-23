import axios from "axios";

const backendUrl = import.meta.env.VITE_BACKEND_BASE_URL;

export const requestEmailCode = async (email) => {
    try {
        const response = await axios.post(`${backendUrl}/auth/email/request`, { email });
        return response.data;
    } catch (error) {
        console.error("인증코드 요청 실패 :", error);
        alert("인증 코드 요청 실패 : 계속 실패한다면 다른 방법으로 로그인 시도 해주세요.");
    }
};

export const requestVerificationCode = async (email, code) => {
    try {
        const response = await axios.post(`${backendUrl}/auth/email/check`, {email, code});
        return response.data;
    } catch (error) {
        if(error.response && error.response.data) {
            const errorCode = error.response.data.code;

            if(errorCode === 'MAIL_003') {
                alert("인증 코드가 일치하지 않습니다.");
            } else if(errorCode === 'MAIL_004') {
                alert("존재하지 않거나 잘못된 이메일입니다.");
            } else if(errorCode === 'MAIL_005') {
                alert("이메일 인증 시간을 초과했습니다.");
            }

            throw error;
        } else {
            alert("서버 오류가 발생했습니다. 다시 시도해주세요.");
        }
    }
};

export const requestSignup = async (formData, config) => {
    try {
        const response = await axios.post(`${backendUrl}/auth/signup`, formData, {
            ...config,
            headers: {
                ...config?.headers,
                "Content-Type": "multipart/form-data",
            },
        });
        
        return response;
    } catch (error) {
        if(error.response && error.response.data) {
            const errorCode = error.response.data.code;

            if(errorCode === 'AUTH_001') {
                alert("비밀번호가 조건을 만족하지 않습니다.");
            } else if(errorCode === 'AUTH_005') {
                alert("유효하지 않은 로그인 방식입니다.");
            } else if(errorCode === 'MAIL_006') {
                alert("이미 가입된 이메일입니다.\n이메일 로그인 화면으로 이동합니다.");
            }

            throw error;
        } else {
            alert("서버가 원활하지 않습니다.\n10분 뒤 로그인 시도해주세요.");
        }
    }
};

export const requestLogin = async (email, password, config) => {
    try {
        const response = await axios.post(`${backendUrl}/login`, {email, password}, config);
        return response;
    } catch (error) {
        if(error.response && error.response.data) {
            const errorCode = error.response.code;

            if(errorCode === 'AUTH_001') {
                alert("비밀번호가 조건을 만족하지 않습니다.");
            } else if(errorCode === 'AUTH_005') {
                alert("유효하지 않은 로그인 방식입니다.");
            } else if(errorCode === 'MAIL_006') {
                alert("이미 가입된 이메일입니다.\n이메일 로그인 화면으로 이동합니다.");
            }

            throw error;
        } else {
            alert("서버가 원활하지 않습니다.\n10분 뒤 로그인 시도해주세요.");
        }
    }
}
