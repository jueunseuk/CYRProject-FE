import * as A from "@/apis/authentication";
import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { userState } from "@/recoil/atom";

const NaverCallback = () => {
      const [searchParams] = useSearchParams();
      const navigate = useNavigate();
      const setUserState = useSetRecoilState(userState);
    
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

                const accessToken = response.headers["authorization"]?.replace("Bearer ", "");

                setUserState((prevUser) => ({
                    ...prevUser,
                    userId: response.data.userId,
                    name: response.data.name,
                    nickname: response.data.nickname,
                    accessToken: accessToken,
                    role: response.data.role,
                    profileUrl: response.data.profileUrl,
                }));

                alert('가입 완료!\n프로필에서 내 정보를 꾸밀 수 있어요!');
                navigate('/');
            } catch (err) {
                alert("로그인 실패!");
                navigate('/');
            }
        };
      
        return <div></div>;
    };

export default NaverCallback;
