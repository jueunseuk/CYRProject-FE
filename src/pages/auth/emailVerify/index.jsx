import { useNavigate } from "react-router-dom";
import * as S from "./styles";
import { useState } from "react";
import { requestEmailCode, requestVerificationCode } from "@/apis/authentication";

const EmailVerify = () => {
    const [email, setEmail] = useState("");
    const [code, setCode] = useState("");
    const navigate = useNavigate();

    const handleNavigateLogin = () => {
        navigate('/login');
    }

    const handleRequestCode = async () => {
        if(!email) {
            alert("이메일을 입력해주세요.");
            return;
        }
        try {
            await requestEmailCode(email);
            alert("인증코드가 이메일로 전송되었습니다.");
        } catch (error) {
            alert(error);
        }
    };

    const handleRequestVerification = async () => {
        if(!code) {
            alert("코드를 입력해주세요.");
        }
        try {
            await requestVerificationCode(email, code);
            alert("이메일 인증이 완료되었습니다.");
            navigate('/signup/form');
        } catch (error) {
            alert(error);
        }
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handleCodeChange = (e) => {
        setCode(e.target.value);
    }

    return (
        <>
            <S.Logo />
            <S.Title>이메일 인증</S.Title>
            <S.GuideText>본인 인증을 위해 이메일을 입력해주세요.</S.GuideText>
            <S.GuideText>인증코드는 10분간 유효합니다.</S.GuideText>
            <S.VerticalWrapper>
                <S.HorizontalWrapper>
                    <S.InputField type="email" width="225px" placeholder="example@gmail.com" onChange={handleEmailChange}/>
                    <S.EmailSendButton onClick={handleRequestCode}>인증코드 전송</S.EmailSendButton>
                </S.HorizontalWrapper>
                <S.InputField type="text" width="330px" placeholder="인증코드 6자리를 입력해주세요." onChange={handleCodeChange}/>
            </S.VerticalWrapper>
            <S.LoginNextButton onClick={handleRequestVerification}>확인</S.LoginNextButton>
            <S.NavigateText onClick={handleNavigateLogin}>처음으로 돌아가기</S.NavigateText>
        </>
    );
}

export default EmailVerify;
