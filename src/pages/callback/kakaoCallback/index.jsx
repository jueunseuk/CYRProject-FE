import * as A from "@/apis/authentication";
import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const KakaoCallback = () => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();

    useEffect(() => {
        const code = searchParams.get("code");

        if (code) {
            handleKakaoLogin(code);
        }
    }, []);

    const handleKakaoLogin = async (code) => {
        try {
            const response = await A.requestKakaoUserInformation(code);

            localStorage.setItem("userInfo", JSON.stringify({
                userId: response.data.userId,
                nickname: response.data.nickname,
                role: response.data.role,
                name: response.data.name,
                createdAt: response.data.createdAt,
                profileUrl: response.data.profileUrl
            }));

            navigate('/');
        } catch (err) {
            if(err.response.data.code === "AUTH_014") {
                navigate('/auth/login');
            } else navigate('/');
        }
    };
    
    return <div></div>;
}

export default KakaoCallback;