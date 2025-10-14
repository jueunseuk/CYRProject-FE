import * as S from "./styles";
import * as U from "@/apis/user";
import glass from "@/assets/icon/user/glass.svg";
import sand from "@/assets/icon/user/sand.svg";
import furnace from "@/assets/icon/user/furnace.svg";
import { useEffect, useState } from "react";

const Craft = () => {
    const [userData, setUserData] = useState({
        glass: 0,
        sand: 0,
        temperature: 0,
        role: "GUEST"
    });
    
    useEffect(() => {
        const fetchExp = async () => {
            try {
                const response = await U.getUserSidebar();
                setUserData(response.data);
            } catch (error) {

            }
        };
    
        fetchExp();
    }, []);

    const getCreatedAtColor = (date) => {
        if(!date) return 0;
        const now = new Date();
        const createdAt = new Date(date);
        return Math.floor((now - createdAt) / (1000 * 60 * 60 * 24));
    };

    return (
        <S.Wrapper>
            <S.Text $size={"25px"} $weight={"700"} style={{textAlign: "center"}}>유리공방</S.Text>
            <S.HorizontalWrapper $gap={"10px"}>
                <S.Icon src={glass} $width={"20px"}/>
                <S.Text $size={"20px"} $weight={"700"}>{userData.glass}</S.Text>
            </S.HorizontalWrapper>
            <S.QuoteWrapper>
                <S.Text $size={"15px"} $weight={"600"}>아래의 조건을 모두 만족하면 유리 조각 하나를 얻을 수 있습니다.</S.Text>
                <S.Text $size={"14px"} style={{textIndent: "8px"}}>1. 모래알 100알</S.Text>
                <S.Text $size={"14px"} style={{textIndent: "8px"}}>2. 활동 온도 1800℃</S.Text>
                <S.Text $size={"14px"} style={{textIndent: "8px"}}>3. 가입한 지 일주일 이상</S.Text>
                <S.Text $size={"14px"} style={{textIndent: "8px"}}>4. MEMBER 권한 이상</S.Text>
            </S.QuoteWrapper>
            <S.HorizontalWrapper $gap={"20px"}>
                <S.ItemBox>
                    <S.Text $size={"16px"}>모래알</S.Text>
                    <S.HorizontalWrapper $gap={"7px"}>
                        <S.Icon src={sand} />
                        <S.Text $size={"20px"} $weight={"700"} $color={userData.sand < 100 ? "red" : "green"}>{userData.sand}알</S.Text>
                    </S.HorizontalWrapper>
                </S.ItemBox>
                <S.ColumnContour />
                <S.ItemBox>
                    <S.Text $size={"16px"}>활동 온도</S.Text>
                    <S.HorizontalWrapper $gap={"7px"}>
                        <S.Icon src={furnace} />
                        <S.Text $size={"20px"} $weight={"700"} $color={userData.temperature < 1800 ? "red" : "green"}>{userData.temperature}℃</S.Text>
                    </S.HorizontalWrapper>
                </S.ItemBox>
                <S.ColumnContour />
                <S.ItemBox>
                    <S.Text $size={"16px"}>가입 경과일</S.Text>
                    <S.Text $size={"20px"} $weight={"700"} $color={getCreatedAtColor(userData.createdAt) < 7 ? "red" : "green"}>+{getCreatedAtColor(userData.createdAt)}일</S.Text>
                </S.ItemBox>
                <S.ColumnContour />
                <S.ItemBox>
                    <S.Text $size={"16px"}>권한</S.Text>
                    <S.Text $size={"20px"} $weight={"700"} $color={userData.role === "GUEST" ? "red" : "green"}>{userData.role}</S.Text>
                </S.ItemBox>
            </S.HorizontalWrapper>
            <S.Button disabled={
                userData.sand < 100 ||
                userData.temperature < 1800 ||
                getCreatedAtColor(userData.createdAt) < 7 ||
                userData.role === "GUEST"}
                onClick={""}
            >유리 조각으로 바꾸기</S.Button>
        </S.Wrapper>
    );
};

export default Craft;