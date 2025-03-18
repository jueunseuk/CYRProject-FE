import * as S from "./styles";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const EmailLogin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleNavigateResetPassword = () => {
        navigate('/login/reset-password');
    }
    const handleNavigateLogin = () => {
        navigate('/login');
    }

    const handleEmailChange = (value) => {
        setEmail(value);
      };
    
    const handlePasswordChange = (value) => {
    setPassword(value);
    };

    return (
        <>
            <S.Logo />
            <S.VerticalWrapper>
                <S.InputArea>
                    <S.InputGuideText>이메일</S.InputGuideText>
                    <S.InputField type="email" onChange={handleEmailChange}/>
                </S.InputArea>
                <S.InputArea>
                    <S.InputGuideText>비밀번호</S.InputGuideText>
                    <S.InputField type="password" onChange={handlePasswordChange}/>
                </S.InputArea>
            </S.VerticalWrapper>
            <S.LoginNextButton disabled={email === "" || password.length === ""}>로그인</S.LoginNextButton>
            <S.SignupArea>
                <S.NavigateText onClick={handleNavigateLogin}>처음으로 돌아가기</S.NavigateText>
                <S.GuideText>|</S.GuideText>
                <S.NavigateText onClick={handleNavigateResetPassword}>비밀번호 재설정</S.NavigateText>
            </S.SignupArea>
        </>
    );
}

export default EmailLogin;
