import { useNavigate } from "react-router-dom";
import * as S from "./styles";

const EmailVerify = () => {

    const navigate = useNavigate();

    const handleNavigateLogin = () => {
        navigate('/login');
    }

    return (
        <>
            <S.Logo />
            <S.Title>이메일 인증</S.Title>
            <S.GuideText>본인 인증을 위해 이메일을 입력해주세요.</S.GuideText>
            <S.GuideText>인증코드는 10분간 유효합니다.</S.GuideText>
            <S.VerticalWrapper>
                <S.HorizontalWrapper>
                    <S.InputField type="email" width="225px" placeholder="example@gmail.com"/>
                    <S.EmailSendButton>인증코드 전송</S.EmailSendButton>
                </S.HorizontalWrapper>
                <S.InputField type="text" width="330px" placeholder="인증코드 6자리를 입력해주세요."/>
            </S.VerticalWrapper>
            <S.LoginNextButton>다음으로</S.LoginNextButton>
            <S.NavigateText onClick={handleNavigateLogin}>처음으로 돌아가기</S.NavigateText>
        </>
    );
}

export default EmailVerify;
