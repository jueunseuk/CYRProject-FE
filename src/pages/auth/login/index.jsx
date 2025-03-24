import * as S from "./styles";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();

    const handleNavigateEmailLogin = () => {
        navigate('/auth/login/email');
    }

    const handleNavigateEmailSignup = () => {
        navigate('/auth/signup/email/verify');
    }

    const handleNavigateNaverLogin = () => {
        navigate('/auth/callback-naver');
    }

    return (
        <>
            <S.Logo />
            <S.LoginMethod >
                <S.KakaoLoginButton>카카오로 로그인하기</S.KakaoLoginButton>
                <S.NaverLoginButton onClick={handleNavigateNaverLogin}>네이버로 로그인하기</S.NaverLoginButton>
                <S.GoogleLoginButton>구글로 로그인하기</S.GoogleLoginButton>
                <S.EmailLoginButton onClick={handleNavigateEmailLogin}>이메일로 로그인하기</S.EmailLoginButton>
            </S.LoginMethod>
            <S.SignupArea>
                <S.GuideText>이곳이 처음인가요?</S.GuideText>
                <S.NavigateText onClick={handleNavigateEmailSignup}>회원가입</S.NavigateText>
            </S.SignupArea>
        </>
    );
}

export default Login;
