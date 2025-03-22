import { useNavigate } from "react-router-dom";
import * as S from "./styles";

const ResetPassword = () => {
    const navigate = useNavigate();

    const handleNavigateLogin = () => {
        navigate('/auth/login');
    }

    return (
        <>
            <S.Logo />
            <S.Title>비밀번호 변경</S.Title>
            <S.GuideText>안전하고 기억하기 쉬운 비밀번호를 지정해주세요.</S.GuideText>
            <br />
            <S.GuideText>비밀번호는 영어, 숫자, 특수문자를 &nbsp;<S.Essential>모두 포함</S.Essential>해서</S.GuideText>
            <S.GuideText><S.Essential>8~20자</S.Essential>의 길이를 만족해야합니다.</S.GuideText>
            <S.VerticalWrapper>
                <S.InputArea>
                    <S.InputGuideText><S.Essential>*</S.Essential>이메일</S.InputGuideText>
                    <S.InputField type="email"/>
                </S.InputArea>
                <S.InputArea>
                    <S.InputGuideText><S.Essential>*</S.Essential>새 비밀번호</S.InputGuideText>
                    <S.InputField type="password"/>
                </S.InputArea>
                <S.InputArea>
                    <S.InputGuideText><S.Essential>*</S.Essential>비밀번호 확인</S.InputGuideText>
                    <S.InputField type="password"/>
                </S.InputArea>
            </S.VerticalWrapper>
            <S.LoginNextButton>비밀번호 변경하기</S.LoginNextButton>
            <S.SignupArea>
                <S.NavigateText onClick={handleNavigateLogin}>처음으로 돌아가기</S.NavigateText>
                <S.GuideText>|</S.GuideText>
                <S.NavigateText>관리자에게 문의하기</S.NavigateText>
            </S.SignupArea>
        </>
    );
}

export default ResetPassword;
