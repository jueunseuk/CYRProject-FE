import * as S from "./styles";
import * as G from "@/apis/glass";
import LineGraph from "@/components/graph/lineGraph";
import { useEffect, useState } from "react";

const Glass = ({userId, type}) => {
    const [data, setData] = useState({});
    const [graphData, setGraphData] = useState([]);

    useEffect(() => {
        const fetchUserGlassData = async () => {
        try {
            const response = await G.getUserGlassData(userId);
            setData(response.data);
        } catch(error) {

        }
    };

        const fetchUserGlassHistory = async () => {
            try {
                const response = await G.getUserGlassHisotry(userId);
                setGraphData(response.data);
            } catch(error) {

            }
        };

        fetchUserGlassData();
        fetchUserGlassHistory();
    }, [userId]);

    return (
        <S.Wrapper>
            <S.Text $size={"17px"} $weight={"700"} style={{alignSelf: "flex-start"}}>유리 조각</S.Text>
            <S.VerticalWrapper $ai={"center"} style={{marginBottom: "25px"}}>
                <S.FieldWrapper>
                    <S.Text $size={"16px"}>현재 유리 조각 수</S.Text>
                    <S.Text $size={"16px"}>{data.current}</S.Text>
                </S.FieldWrapper>
                <S.FieldWrapper>
                    <S.Text $size={"16px"}>오늘 얻은 유리 조각</S.Text>
                    <S.Text $size={"16px"}>{data.today}</S.Text>
                </S.FieldWrapper>
                <S.FieldWrapper>
                    <S.Text $size={"16px"} $color={"#aaa"}>전일 대비 상승</S.Text>
                    <S.Text $size={"16px"} $color={"#aaa"}>{data.incrementByDay}</S.Text>
                </S.FieldWrapper>
                <S.FieldWrapper>
                    <S.Text $size={"16px"}>이번주 얻은 유리 조각</S.Text>
                    <S.Text $size={"16px"}>{data.week}</S.Text>
                </S.FieldWrapper>
                <S.FieldWrapper>
                    <S.Text $size={"16px"} $color={"#aaa"}>전주 대비 상승</S.Text>
                    <S.Text $size={"16px"} $color={"#aaa"}>{data.incrementByWeek}</S.Text>
                </S.FieldWrapper>
                <S.FieldWrapper>
                    <S.Text $size={"16px"}>이번달 얻은 유리 조각</S.Text>
                    <S.Text $size={"16px"}>{data.month}</S.Text>
                </S.FieldWrapper>
                <S.FieldWrapper>
                    <S.Text $size={"16px"} $color={"#aaa"}>전월 대비 상승</S.Text>
                    <S.Text $size={"16px"} $color={"#aaa"}>{data.incrementByMonth}</S.Text>
                </S.FieldWrapper>
            </S.VerticalWrapper>

            <S.Text $size={"17px"} $weight={"700"} style={{alignSelf: "flex-start"}}>히스토리</S.Text>
            <S.GraphWrapper>
                {graphData[0]?.data.length === 0 ? 
                    <S.EmptyGraphWrapper>아직 아무런 활동 로그가 없어요..</S.EmptyGraphWrapper> : 
                    <LineGraph data={graphData} type={type}
                />}
            </S.GraphWrapper>
        </S.Wrapper>
    );
};

export default Glass;