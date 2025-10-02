import * as S from "./styles";
import * as SA from "@/apis/sand";
import { useEffect, useState } from "react";

const Sand = ({userId}) => {
    const [data, setData] = useState({});

    useEffect(() => {
        const fetchUserSandData = async () => {
        try {
            const response = await SA.getUserSandData(userId);
            setData(response.data);
        } catch(error) {

        }
    };

        fetchUserSandData();
    }, [userId]);

    return (
        <S.Wrapper>
            <S.Text $size={"17px"} $weight={"700"} style={{alignSelf: "flex-start"}}>모래알</S.Text>
            <S.VerticalWrapper $ai={"center"} $gap={"5px"} style={{width: "95%", marginBottom: "25px"}}>
                <S.HorizontalWrapper $jc={"space-between"}>
                    <S.Text $size={"16px"}>현재 모래알</S.Text>
                    <S.Text $size={"16px"}>{data.current}</S.Text>
                </S.HorizontalWrapper>
                <S.HorizontalWrapper $jc={"space-between"}>
                    <S.Text $size={"16px"}>오늘 얻은 모래알</S.Text>
                    <S.Text $size={"16px"}>{data.today}</S.Text>
                </S.HorizontalWrapper>
                <S.HorizontalWrapper $jc={"space-between"}>
                    <S.Text $size={"16px"} $color={"#aaa"}>전일 대비 상승</S.Text>
                    <S.Text $size={"16px"} $color={"#aaa"}>{data.incrementByDay}</S.Text>
                </S.HorizontalWrapper>
                <S.HorizontalWrapper $jc={"space-between"}>
                    <S.Text $size={"16px"}>이번주 얻은 모래알</S.Text>
                    <S.Text $size={"16px"}>{data.week}</S.Text>
                </S.HorizontalWrapper>
                <S.HorizontalWrapper $jc={"space-between"}>
                    <S.Text $size={"16px"} $color={"#aaa"}>전주 대비 상승</S.Text>
                    <S.Text $size={"16px"} $color={"#aaa"}>{data.incrementByWeek}</S.Text>
                </S.HorizontalWrapper>
                <S.HorizontalWrapper $jc={"space-between"}>
                    <S.Text $size={"16px"}>이번달 얻은 모래알</S.Text>
                    <S.Text $size={"16px"}>{data.month}</S.Text>
                </S.HorizontalWrapper>
                <S.HorizontalWrapper $jc={"space-between"}>
                    <S.Text $size={"16px"} $color={"#aaa"}>전월 대비 상승</S.Text>
                    <S.Text $size={"16px"} $color={"#aaa"}>{data.incrementByMonth}</S.Text>
                </S.HorizontalWrapper>
            </S.VerticalWrapper>

            <S.Text $size={"17px"} $weight={"700"} style={{alignSelf: "flex-start"}}>히스토리</S.Text>
        </S.Wrapper>
    );
};

export default Sand;