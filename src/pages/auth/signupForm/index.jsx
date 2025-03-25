import * as A from "@/apis/authentication"
import * as S from "./styles";
import { useRef, useState } from "react";
import defualt from "@/assets/image/default_profile.jpg"
import { useNavigate } from "react-router-dom";
import { signupState } from "@/recoil/atom";
import { useRecoilState } from "recoil";

const nicknamePattern = /^(?=.*[A-Za-z가-힣\d])[A-Za-z가-힣\d]{2,8}$/;
const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;
const MAX_SIZE = 5 * 1024 * 1024;

const SignupForm = () => {
    const navigate = useNavigate();
    const [state] = useRecoilState(signupState);
    const fileInputRef = useRef(null);
    const [imagePreview, setImagePreview] = useState(null);
    const [formData, setFormData] = useState({
        email: "",
        name: "",
        password: "",
        confirmPassword: "",
        nickname: "",
        profileImage: null,
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

        if(file.size > MAX_SIZE) {
            alert("파일의 크기가 너무 큽니다.\n5MB 이하의 이미지만 업로드 가능합니다.");
            return;
        }

        const fileURL = URL.createObjectURL(file);
        setImagePreview(fileURL);

        setFormData({
            ...formData,
            profileImage: file,
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
            const formDataToSend = new FormData();
            formDataToSend.append("method", state.method);
            formDataToSend.append("email", state.email);
            formDataToSend.append("name", formData.name);
            formDataToSend.append("password", formData.password);
            formDataToSend.append("nickname", formData.nickname);
    
            if(formData.profileImage) {
                formDataToSend.append("profileImage", formData.profileImage);
            }
    
            const response = await A.requestSignup(formDataToSend, { withCredentials: true });

            localStorage.setItem("userInfo", JSON.stringify({
                userId: response.data.userId,
                nickname: response.data.nickname,
                role: response.data.role,
                name: response.data.name,
                createdAt: response.data.createdAt,
                profileUrl: response.data.profileUrl
            }));
    
            alert("성공적으로 가입했습니다!\n정회원 요청을 통해 정식으로 카페에서 활동해보세요!");
            navigate('/');
        } catch (error) {
            console.error("회원가입 실패:", error);
        }
    };

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
