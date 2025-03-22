import { useNavigate } from "react-router-dom";
import * as S from "./styles";

const GuestInfo = () => {
    const navigate = useNavigate();

    const handleNavigateLogin = () => {
        navigate('/auth/login');
    }

    return (
        <>
            <S.Wrapper>
                <S.Title>로그인 필요</S.Title>
                <S.LoginButton onClick={handleNavigateLogin}>로그인</S.LoginButton>
                <S.HorizontalWrapper>
                    <S.LinkText>서비스 이용약관</S.LinkText>
                    <S.LinkText>개인정보보호 정책</S.LinkText>
                </S.HorizontalWrapper>
            </S.Wrapper>
        </>
    );
};

export default GuestInfo;