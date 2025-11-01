import * as S from "./styles";
import BannerSetting from "./bannerSetting";
import AccountSetting from "./accountSetting";

const UserSetting = ({user}) => {

    return (
        <S.Wrapper>
            <S.SettingWrapper>
                <S.VerticalWrapper>
                    <S.Text $size={"16px"} $weight={"600"} >배경 설정</S.Text>
                    <S.Text $size={"13px"} style={{marginTop: "5px"}}>커뮤니티 상단의 배너 이미지를 직접 설정할 수 있습니다.</S.Text>
                    <BannerSetting />
                </S.VerticalWrapper>
            </S.SettingWrapper>
            <S.SettingWrapper>
                <S.VerticalWrapper>
                    <S.Text $size={"16px"} $weight={"600"}>알림 설정</S.Text>
                    <S.Text $size={"13px"} style={{marginTop: "5px"}}>알림과 관련된 설정을 할 수 있습니다.</S.Text>
                </S.VerticalWrapper>
            </S.SettingWrapper>
            <S.SettingWrapper>
                <S.VerticalWrapper>
                    <S.Text $size={"16px"} $weight={"600"}>채팅 설정</S.Text>
                    <S.Text $size={"13px"} style={{marginTop: "5px"}}>율톡 서비스에 관련된 설정을 할 수 있습니다.</S.Text>
                </S.VerticalWrapper>
            </S.SettingWrapper>
            <S.SettingWrapper>
                <S.VerticalWrapper>
                    <S.Text $size={"16px"} $weight={"600"}>계정 설정</S.Text>
                    <S.Text $size={"13px"} style={{marginTop: "5px"}}>내 계정 정보를 확인하고 관리할 수 있습니다.</S.Text>
                    <AccountSetting />
                </S.VerticalWrapper>
            </S.SettingWrapper>
        </S.Wrapper>
    );
};

export default UserSetting;