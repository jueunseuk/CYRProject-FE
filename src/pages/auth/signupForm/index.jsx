import * as A from "@/apis/authentication"
import * as S from "./styles";
import { useRef, useState } from "react";
import defualt from "@/assets/image/default-bg.jpg"
import { useNavigate } from "react-router-dom";
import { signupState, userState } from "@/recoil/atom";
import { useRecoilState, useSetRecoilState } from "recoil";

const nicknamePattern = /^(?=.*[A-Za-z가-힣\d])[A-Za-z가-힣\d]{2,8}$/;
const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;

const SignupForm = () => {
    const navigate = useNavigate();
    const [state] = useRecoilState(signupState);
    const setUserState = useSetRecoilState(userState);
    const fileInputRef = useRef(null);
    const [imagePreview, setImagePreview] = useState(null);
    const [formData, setFormData] = useState({
        email: "",
        name: "",
        password: "",
        confirmPassword: "",
        nickname: "",
        profileUrl: "",
    });

    const handleNavigateHome = () => {
        navigate(-2);
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleImageChange = (event) => {
        const file = event.target.files[0];

        if (!file) return;

        const fileURL = URL.createObjectURL(file);
        setImagePreview(fileURL);

        setFormData({
            ...formData,
            profileUrl: fileURL,
        });
    };

    const handleDivClick = () => {
        fileInputRef.current.click();
    };

    const getDescriptionColor = (e, pattern) => {
        if(e.length === 0) return "#B8B8B8";
        return pattern.test(e) ? "#7f52ff" : "#ff3838";
    };

    const handleRequestSignup = async () => {
        try {
            const response = await A.requestSignup(state.method, state.email, formData.name, formData.password, formData.nickname, formData.profileUrl);
            
            const accessToken = response.headers["authorization"]; 

            setUserState((prevUser) => ({
                ...prevUser,
                userId: response.data.userId,
                name: response.data.name,
                nickname: response.data.nickname,
                accessToken: accessToken,
                role: response.data.role,
            }))
            console.log(userState)
            navigate('/');
        } catch(error) {

        }
    }

    return (
        <>
            <S.HorizontalWrapper>
                <S.Navigate onClick={handleNavigateHome}>x</S.Navigate>
                <S.Title>회원가입</S.Title>
                <S.Title>&nbsp;&nbsp;&nbsp;</S.Title>
            </S.HorizontalWrapper>
            <S.SignupForm>
                <S.InputImage src={imagePreview ? imagePreview : defualt} onClick={handleDivClick}></S.InputImage>
                <S.InputProfileLable onClick={handleDivClick}>프로필 사진 등록</S.InputProfileLable>
                <S.FileInput type="file" accept="image/png, image/jpg, image/jpeg" ref={fileInputRef} onChange={handleImageChange}/>

                <S.InputArea>
                    <S.InputLable >
                        <S.Essential>*</S.Essential>이메일
                    </S.InputLable>
                    <S.InputField readOnly defaultValue={state.email}/>
                </S.InputArea>

                <S.InputArea>
                    <S.InputLable>
                        <S.Essential>*</S.Essential>이름
                    </S.InputLable>
                    <S.InputField type="text" name="name" value={formData.name} onChange={handleChange} />
                </S.InputArea>
                {(state.method !== 'KAKAO' && state.method !== 'NAVER' && state.method !== 'GOOGLE') && (
                    <>
                        <S.InputArea>
                            <S.InputLable>
                                <S.Essential>*</S.Essential>비밀번호
                                <S.Description style={{ color: getDescriptionColor(formData.password, passwordPattern) }}>&nbsp;(영어, 숫자, 특수문자를 모두 포함한 8~20자 길이)</S.Description>
                            </S.InputLable>
                            <S.InputField type="password" name="password" value={formData.password} onChange={handleChange} />
                        </S.InputArea>

                        <S.InputArea>
                            <S.InputLable>
                                <S.Essential>*</S.Essential>비밀번호 확인
                                {(formData.confirmPassword.length > 0 && formData.password !== formData.confirmPassword) ? <S.Description style={{color : "#ff3838"}}>&nbsp;비밀번호가 일치하지 않습니다.</S.Description> : ""}
                            </S.InputLable>
                            <S.InputField type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} />
                        </S.InputArea>
                    </>
                )}
                
                <S.InputArea>
                    <S.InputLable>
                        별명<S.Description style={{ color: getDescriptionColor(formData.nickname, nicknamePattern) }}>&nbsp;(영어, 한글, 숫자 중 최소 하나를 포함한 2~8자 길이, 공백 불가)</S.Description>
                    </S.InputLable>
                    <S.InputField type="text" name="nickname" value={formData.nickname} onChange={handleChange} />
                </S.InputArea>

                <S.SubmitButton onClick={handleRequestSignup} disabled={
                    formData.name.length < 2 ||
                    !passwordPattern.test(formData.password) ||
                    formData.password !== formData.confirmPassword
                }>가입하기</S.SubmitButton>
            </S.SignupForm>
        </>
    );
}

export default SignupForm;
