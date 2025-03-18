import { useNavigate } from "react-router-dom";
import * as S from "./styles";
import { useEffect, useState } from "react";
import { requestEmailCode, requestVerificationCode } from "@/apis/authentication";

const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const EmailVerify = () => {
    const [email, setEmail] = useState("");
    const [code, setCode] = useState("");
    const [timer, setTimer] = useState(0);
    const [intervalId, setIntervalId] = useState(null);
    const navigate = useNavigate();

    const handleNavigateLogin = () => {
        navigate('/login');
    }

    useEffect(() => {
        if (timer > 0) {
            const id = setInterval(() => {
                setTimer((prev) => prev - 1);
            }, 1000);
            setIntervalId(id);
            return () => clearInterval(id);
        }
    }, [timer]);

    const handleRequestCode = async () => {
        if(!email) {
            alert("이메일을 입력해주세요.");
            return;
        }
        if(!emailPattern.test(email)) {
            alert("이메일 형식이 올바르지 않습니다.");
            return;
        }
        try {
            setTimer(600);
            await requestEmailCode(email);
            if(intervalId) clearInterval(intervalId);
        } catch (error) {
            alert(error);
        }
    };

    const handleRequestVerification = async () => {
        if(email === "" || code.length !== 6) {
            return;
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
                    <S.EmailSendButton onClick={handleRequestCode} disabled={timer > 0}>
                        {timer > 0 ? `${Math.floor(timer / 60)}:${(timer % 60).toString().padStart(2, "0")}` : "코드 전송"}
                    </S.EmailSendButton>
                </S.HorizontalWrapper>
                <S.InputField type="text" width="330px" maxLength="6" placeholder="인증코드 6자리를 입력해주세요." onChange={handleCodeChange}/>
            </S.VerticalWrapper>
            <S.LoginNextButton onClick={handleRequestVerification} disabled={email === "" || code.length !== 6}>확인</S.LoginNextButton>
            <S.NavigateText onClick={handleNavigateLogin}>처음으로 돌아가기</S.NavigateText>
        </>
    );
}

export default EmailVerify;
