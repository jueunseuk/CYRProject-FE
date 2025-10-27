import * as A from "@/apis/authentication";
import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const GoogleCallback = () => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();

    useEffect(() => {
        const code = searchParams.get("code");

        if (code) {
            handleGoogleLogin(code);
        }
    }, []);

    const handleGoogleLogin = async (code) => {
        try {
            const response = await A.requestNaverUserInformation(code);

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
            navigate('/');
        }
    };
    
    return <div></div>;
}

export default GoogleCallback;