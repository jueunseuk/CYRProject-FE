import * as S from "./styles";
import pencil from "@/assets/icon/post/author.svg";
import default_profile from "@/assets/image/default_profile.jpg";
import ImageFullScreen from "@/components/modal/imageFullScreen";
import UserProfileUpdateModal from "@/components/modal/userProfileUpdate";
import { formatDate } from "@/util/dateFormatter";
import { useEffect, useState } from "react";

const Information = ({isOwner, user}) => {
    const [isNeeded, setIsNeeded] = useState(false);
    const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
    const [userUpdateModal, setUserUpdateModal] = useState(false);

    const getLoginMethodBackgroundColor = (method) => {
        if(method === "EMAIL") {
            return {"font": "white", "back": "black"};
        } else if(method === "NAVER") {
            return {"font": "white", "back": "#03CF5D"};
        } else if(method === "GOOGLE") {
            return {"font": "black", "back": "white"};
        } else if(method === "KAKAO") {
            return {"font": "black", "back": "#F9E000"};
        } else {
            return {"font": "black", "back": "white"};
        }
    };

    const getGenderText = (gender) => {
        if(gender === "MALE") {
            return "남자";
        } else if(gender === "FEMALE") {
            return "여자";
        } else {
            return "미등록";
        }
    };

    const getIntroductionText = (introduction) => {
        if(introduction == null || introduction === "") {
            if(isOwner) {
                return "한 줄 인사를 작성해 자신을 나타내보세요!";
            } else {
                return "아직 한 줄 인사가 없어요..";
            }
        } else {
            return introduction;
        }
    };

    useEffect(() => {
        if (user?.passwordUpdatedAt) {
            const last = new Date(user.passwordUpdatedAt);
            const today = new Date();
            const diffDays = Math.floor((today - last) / (1000 * 60 * 60 * 24));

            if (diffDays >= 90) {
                setIsNeeded(true);
            }
        }
    }, [user?.passwordUpdatedAt]);

    const handleImageFullScreen = () => {
        setIsProfileModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsProfileModalOpen(false);
    };

    const handleUserProfileUpdateModal = () => {
        setUserUpdateModal(true);
    };

    const closeUserProfileUpdateModal = () => {
        setUserUpdateModal(false);
    };

    return (
        <S.Wrapper>
            {userUpdateModal && <UserProfileUpdateModal user={user} onClose={() => closeUserProfileUpdateModal()} />}
            <S.VerticalWrapper $gap={"30px"}>
                <S.HorizontalWrapper $gap={"8px"}>
                    <S.Text $size={"18px"} $weight={"700"}>{isOwner ? "내" : "사용자"} 정보</S.Text>
                    {isOwner && <S.Icon src={pencil} onClick={() => handleUserProfileUpdateModal()} />}
                </S.HorizontalWrapper>
                <S.VerticalWrapper>
                    {isProfileModalOpen && <ImageFullScreen onClose={handleCloseModal} profile={user.profileUrl}/>}
                    <S.ProfileImage src={user.profileUrl ? user.profileUrl : default_profile} style={{marginBottom: "10px"}} onClick={() => handleImageFullScreen()} />
                    <S.HorizontalWrapper $gap={"5px"} style={{height: "16px"}}>
                        <S.Text $size={"12px"} $weight={"400"} $color={"#1f1f1fff"}>{user.role}</S.Text>
                        <S.Text $size={"14px"} $weight={"700"} $color={user.color}>{user.nickname}</S.Text>
                    </S.HorizontalWrapper>
                    <S.Text $size={"12px"} $color={"#878787"} style={{height: "14px"}}>{user.email}</S.Text>
                </S.VerticalWrapper>
                <S.VerticalWrapper $gap={"15px"} style={{padding: "0 20px"}}>
                    <S.FieldWrapper $jc={"space-between"}>
                        <S.Text $size={"13px"} $weight={"700"} style={{width: "35px"}}>이름</S.Text>
                        <S.DotLine />
                        <S.Text $size={"13px"}>{user.name}</S.Text>
                    </S.FieldWrapper>
                    <S.FieldWrapper $jc={"space-between"}>
                        <S.Text $size={"13px"} $weight={"700"} style={{width: "35px"}}>성별</S.Text>
                        <S.DotLine />
                        <S.Text $size={"13px"} >{getGenderText(user.gender)}</S.Text>
                    </S.FieldWrapper>
                    <S.FieldWrapper $jc={"space-between"}>
                        <S.Text $size={"13px"} $weight={"700"} style={{width: "35px"}}>나이</S.Text>
                        <S.DotLine />
                        <S.Text $size={"13px"} >{user.age === null ? "미등록" : user.age}</S.Text>
                    </S.FieldWrapper>
                    <S.FieldWrapper $jc={"space-between"}>
                        <S.Text $size={"13px"} $weight={"700"} style={{width: "35px", height: "17px"}}>로그인</S.Text>
                        <S.DotLine />
                        <S.Text $size={"13px"} $weight={"800"}
                            $color={getLoginMethodBackgroundColor(user.method).font} 
                            style={{backgroundColor: getLoginMethodBackgroundColor(user.method).back, padding: "1px 3px", borderRadius: "3px"}}>{user.method}</S.Text>
                    </S.FieldWrapper>
                    <S.FieldWrapper $jc={"space-between"}>
                        <S.Text $size={"13px"} $weight={"700"} style={{width: "35px"}}>가입일</S.Text>
                        <S.DotLine />
                        <S.Text $size={"13px"} >{formatDate(user.createdAt, 2)}</S.Text>
                    </S.FieldWrapper>
                    <S.ColumnFieldWrapper $ai={"flex-start"} style={{padding: "8px 5px"}}>
                        <S.Text $size={"13px"} $weight={"700"} style={{marginBottom: "3px"}}>한 줄 인사</S.Text>
                        <S.Text $size={"12px"} $color={"#878787"} style={{textAlign: "left", whiteSpace: "pre-line"}}>{getIntroductionText(user.introduction)}</S.Text>
                    </S.ColumnFieldWrapper>
                </S.VerticalWrapper>

                {(isOwner && isNeeded) && <S.Text $color={"#ff0000ff"}>비밀번호를 변경한 지 90일이 지났습니다.</S.Text>}
            </S.VerticalWrapper>
        </S.Wrapper>
    );
};

export default Information;