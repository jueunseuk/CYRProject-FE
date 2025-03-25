import * as U from "@/apis/user";
import * as A from "@/apis/authentication";
import * as S from "./styles";
import sand from "@/assets/icon/level/sand.svg";
import house from "@/assets/icon/level/house.svg";
import castle from "@/assets/icon/level/castle.svg";
import desert from "@/assets/icon/level/desert.svg";
import glass from "@/assets/icon/level/glass.svg";
import useUserInfo from "@/hooks/localStorage";
import { formatDate } from "@/util/dateFormatter";
import { useEffect, useState } from "react";
import { formatExp } from "@/util/expFormatter";

const LoginInfo = () => {
    const user = useUserInfo();
    const [userExp, setUserExp] = useState({
        sand: 0, house: 0, castle: 0, desert: 0, glass: 0
    });

    useEffect(() => {
        const fetchExp = async () => {
            try {
                const response = await U.requestUserExperience();
                setUserExp(formatExp(response.data));
            } catch (error) {
                console.error("경험치 불러오기 실패:", error);
            }
        };
    
        fetchExp();
    }, []);

    const handleRequestLogout = async () => {
        try {
            const response = await A.requestLogout();
            localStorage.removeItem("userInfo");
            console.log(response.data.result);
        } catch(error) {
            console.error('로그아웃 실패', error);
        }
    }

    return (
        <S.Wrapper>
            <S.Title>내 정보</S.Title>
            <S.ProfileArea>
                <S.ProfileImage />
                <S.VerticalWrapper>
                    <S.Text size={"16px"} $weight={"600"}>{user.nickname ? user.nickname : user.name}</S.Text>
                    <S.Text size={"12px"} color={"#878787"}>{formatDate(user.createdAt, 2)}</S.Text>
                </S.VerticalWrapper>
            </S.ProfileArea>
            <S.LevelArea>
                <S.LevelSet>
                    <S.LevelIcon src={sand}/>
                    <S.LevelText>{userExp.sand}</S.LevelText>
                </S.LevelSet>
                <S.LevelSet>
                    <S.LevelIcon src={house}/>
                    <S.LevelText>{userExp.house}</S.LevelText>
                </S.LevelSet>
                <S.LevelSet>
                    <S.LevelIcon src={castle}/>
                    <S.LevelText>{userExp.castle}</S.LevelText>
                </S.LevelSet>
                <S.LevelSet>
                    <S.LevelIcon src={desert}/>
                    <S.LevelText>{userExp.desert}</S.LevelText>
                </S.LevelSet>
                <S.LevelSet>
                    <S.LevelIcon src={glass}/>
                    <S.LevelText>{userExp.glass}</S.LevelText>
                </S.LevelSet>
            </S.LevelArea>
            <S.WriteButton>글쓰기</S.WriteButton>
            <S.LinkText onClick={handleRequestLogout}>로그아웃</S.LinkText>
        </S.Wrapper>
    );
}

export default LoginInfo;