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
        const clientId = import.meta.env.VITE_NAVER_CLIENT_ID;
        const redirectUri = import.meta.env.VITE_NAVER_REDIRECT_URI;
        const state = 'cyr-project';
    
        const naverLoginUrl = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}&state=${state}`;
    
        window.location.href = naverLoginUrl;
    };

    const handleNavigateGoogleLogin = () => {
        const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;
        const redirectUri = import.meta.env.VITE_GOOGLE_REDIRECT_URI;

        const googleLoginUrl =`https://accounts.google.com/o/oauth2/v2/auth?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code&scope=openid%20email%20profile&access_type=offline&include_granted_scopes=true`;

        window.location.href = googleLoginUrl;
    };

    const handleNavigateKakaoLogin = () => {
        const clientId = import.meta.env.VITE_KAKAO_CLIENT_ID;
        const redirectUri = import.meta.env.VITE_KAKAO_REDIRECT_URI;

        const kakaoLoginUrl = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}`

        window.location.href = kakaoLoginUrl;
    };

    return (
        <>
            <S.Logo />
            <S.LoginMethod >
                <S.KakaoLoginButton onClick={handleNavigateKakaoLogin}>카카오로 로그인하기</S.KakaoLoginButton>
                <S.NaverLoginButton onClick={handleNavigateNaverLogin}>네이버로 로그인하기</S.NaverLoginButton>
                <S.GoogleLoginButton onClick={handleNavigateGoogleLogin}>구글로 로그인하기</S.GoogleLoginButton>
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
