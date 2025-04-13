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
            </S.Wrapper>
        </>
    );
};

export default GuestInfo;