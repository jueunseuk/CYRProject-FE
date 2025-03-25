import * as A from "@/apis/authentication";
import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const NaverCallback = () => {
      const [searchParams] = useSearchParams();
      const navigate = useNavigate();
    
        useEffect(() => {
            const code = searchParams.get("code");
            const state = searchParams.get("state");

            if (code) {
                handleNaverLogin(code, state);
            }
        }, []);
    
        const handleNaverLogin = async (code, state) => {
            try {
                const response = await A.requestNaverUserInformation(code, state);

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
    };

export default NaverCallback;
