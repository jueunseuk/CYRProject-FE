import * as S from "./styles";
import * as SA from "@/apis/sand";
import LineGraph from "@/components/graph/lineGraph";
import sand from "@/assets/icon/user/sand.svg";
import { useEffect, useState } from "react";

const Sand = ({userId, type}) => {
    const [data, setData] = useState({});
    const [graphData, setGraphData] = useState([]);

    useEffect(() => {
        const fetchUserSandData = async () => {
            try {
                const response = await SA.getUserSandData(userId);
                setData(response.data);
            } catch(error) {

            }
        };

        const fetchUserSandHistory = async () => {
            try {
                const response = await SA.getUserSandHisotry(userId);
                setGraphData(response.data);
            } catch(error) {

            }
        };

        fetchUserSandData();
        fetchUserSandHistory();
    }, [userId]);

    return (
        <S.Wrapper>
            <S.HorizontalWrapper $jc={"flex-start"} $gap={"5px"}>
                <S.Text $size={"16px"} $weight={"700"} style={{alignSelf: "flex-start"}}>모래알</S.Text>
                <S.Icon src={sand} $height={"15px"}/>
            </S.HorizontalWrapper>
            <S.VerticalWrapper $ai={"center"} style={{marginBottom: "25px"}}>
                <S.FieldWrapper>
                    <S.Text $size={"16px"}>현재 모래알</S.Text>
                    <S.Text $size={"16px"}>{data.current}</S.Text>
                </S.FieldWrapper>
                <S.FieldWrapper>
                    <S.Text $size={"16px"}>오늘 얻은 모래알</S.Text>
                    <S.Text $size={"16px"}>{data.today}</S.Text>
                </S.FieldWrapper>
                <S.FieldWrapper>
                    <S.Text $size={"16px"} $color={"#aaa"}>전일 대비 상승</S.Text>
                    <S.Text $size={"16px"} $color={"#aaa"}>{data.incrementByDay}</S.Text>
                </S.FieldWrapper>
                <S.FieldWrapper>
                    <S.Text $size={"16px"}>이번주 얻은 모래알</S.Text>
                    <S.Text $size={"16px"}>{data.week}</S.Text>
                </S.FieldWrapper>
                <S.FieldWrapper>
                    <S.Text $size={"16px"} $color={"#aaa"}>전주 대비 상승</S.Text>
                    <S.Text $size={"16px"} $color={"#aaa"}>{data.incrementByWeek}</S.Text>
                </S.FieldWrapper>
                <S.FieldWrapper>
                    <S.Text $size={"16px"}>이번달 얻은 모래알</S.Text>
                    <S.Text $size={"16px"}>{data.month}</S.Text>
                </S.FieldWrapper>
                <S.FieldWrapper>
                    <S.Text $size={"16px"} $color={"#aaa"}>전월 대비 상승</S.Text>
                    <S.Text $size={"16px"} $color={"#aaa"}>{data.incrementByMonth}</S.Text>
                </S.FieldWrapper>
            </S.VerticalWrapper>

            <S.Text $size={"16px"} $weight={"700"} style={{alignSelf: "flex-start"}}>히스토리</S.Text>
            <S.GraphWrapper>
                {graphData[0]?.data.length === 0 ? 
                    <S.EmptyGraphWrapper>아직 아무런 활동 로그가 없어요..</S.EmptyGraphWrapper> : 
                    <LineGraph data={graphData} type={type}
                />}
            </S.GraphWrapper>
        </S.Wrapper>
    );
};

export default Sand;