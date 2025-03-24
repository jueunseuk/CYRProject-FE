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
                    profileUrl: response.data.profileUrl
                }));

                alert('가입 완료!\n프로필에서 내 정보를 꾸밀 수 있어요!');
                navigate('/');
            } catch (err) {
                navigate('/');
            }
        };
      
        return <div></div>;
    };

export default NaverCallback;
