import * as S from "./styles";
import sand from "@/assets/icon/level/sand.svg";
import house from "@/assets/icon/level/house.svg";
import castle from "@/assets/icon/level/castle.svg";
import desert from "@/assets/icon/level/desert.svg";
import glass from "@/assets/icon/level/glass.svg";
import useUserInfo from "@/hooks/localStorage";

const LoginInfo = () => {
    const user = useUserInfo();

    return (
        <S.Wrapper>
            <S.Title>내 정보</S.Title>
            <S.ProfileArea>
                <S.ProfileImage />
                <S.VerticalWrapper>
                    <S.Text size={"16px"} $weight={"600"}>{user.nickname ? user.nickname : user.name}</S.Text>
                    <S.Text size={"12px"} color={"#878787"}>가입일 25.01.25</S.Text>
                </S.VerticalWrapper>
            </S.ProfileArea>
            <S.LevelArea>
                <S.LevelSet>
                    <S.LevelIcon src={sand}/>
                    <S.LevelText>2</S.LevelText>
                </S.LevelSet>
                <S.LevelSet>
                    <S.LevelIcon src={house}/>
                    <S.LevelText>3</S.LevelText>
                </S.LevelSet>
                <S.LevelSet>
                    <S.LevelIcon src={castle}/>
                    <S.LevelText>6</S.LevelText>
                </S.LevelSet>
                <S.LevelSet>
                    <S.LevelIcon src={desert}/>
                    <S.LevelText>2</S.LevelText>
                </S.LevelSet>
                <S.LevelSet>
                    <S.LevelIcon src={glass}/>
                    <S.LevelText>1</S.LevelText>
                </S.LevelSet>
            </S.LevelArea>
            <S.WriteButton>글쓰기</S.WriteButton>
            <S.LinkText>로그아웃</S.LinkText>
        </S.Wrapper>
    );
}

export default LoginInfo;