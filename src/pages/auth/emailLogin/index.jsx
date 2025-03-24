import * as A from "@/apis/authentication"
import * as S from "./styles";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const EmailLogin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleNavigateResetPassword = () => {
        navigate('/auth/login/email/verify');
    };

    const handleNavigateLogin = () => {
        navigate('/auth/login');
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };
    
    const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    };

    const handleRequestLogin = async () => {
        try {
            const response = await A.requestLogin(email, password, {withCredentials: true});

            localStorage.setItem("userInfo", JSON.stringify({
                userId: response.data.userId,
                nickname: response.data.nickname,
                role: response.data.role,
                name: response.data.name,
                profileUrl: response.data.profileUrl
            }));

            navigate('/');
        } catch (error) {

        }
    }

    return (
        <>
            <S.Logo />
            <S.VerticalWrapper>
                <S.InputArea>
                    <S.InputGuideText>이메일</S.InputGuideText>
                    <S.InputField type="email" name="email" onChange={handleEmailChange}/>
                </S.InputArea>
                <S.InputArea>
                    <S.InputGuideText>비밀번호</S.InputGuideText>
                    <S.InputField type="password" name="password" onChange={handlePasswordChange}/>
                </S.InputArea>
            </S.VerticalWrapper>
            <S.LoginNextButton disabled={email === "" || password.length === ""} onClick={handleRequestLogin}>로그인</S.LoginNextButton>
            <S.SignupArea>
                <S.NavigateText onClick={handleNavigateLogin}>처음으로 돌아가기</S.NavigateText>
                <S.GuideText>|</S.GuideText>
                <S.NavigateText onClick={handleNavigateResetPassword}>비밀번호 재설정</S.NavigateText>
            </S.SignupArea>
        </>
    );
}

export default EmailLogin;
