import * as S from "./styles";
import * as E from "@/apis/experience";
import LineGraph from "@/components/graph/lineGraph";
import { useEffect, useState } from "react";

const Experience = ({userId, type}) => {
    const [data, setData] = useState({});
    const [graphData, setGraphData] = useState([]);

    useEffect(() => {
        const fetchUserExperienceData = async () => {
          try {
              const response = await E.getUserExperienceData(userId);
              setData(response.data);
          } catch(error) {

          }
        };

        const fetchUserExperienceHistory = async () => {
          try {
              const response = await E.getUserExperienceHisotry(userId);
              setGraphData(response.data);
          } catch(error) {

          }
        };

        fetchUserExperienceData();
        fetchUserExperienceHistory();
    }, [userId]);
    
    return (
        <S.Wrapper>
            <S.Text $size={"17px"} $weight={"700"} style={{alignSelf: "flex-start"}}>경험치</S.Text>
            <S.VerticalWrapper $ai={"center"} style={{marginBottom: "25px"}}>
                <S.FieldWrapper>
                    <S.Text $size={"16px"}>현재 경험치</S.Text>
                    <S.Text $size={"16px"}>{data.current}</S.Text>
                </S.FieldWrapper>
                <S.FieldWrapper>
                    <S.Text $size={"16px"}>오늘 얻은 경험치</S.Text>
                    <S.Text $size={"16px"}>{data.today}</S.Text>
                </S.FieldWrapper>
                <S.FieldWrapper>
                    <S.Text $size={"16px"} $color={"#aaa"}>전일 대비 상승</S.Text>
                    <S.Text $size={"16px"} $color={"#aaa"}>{data.incrementByDay}</S.Text>
                </S.FieldWrapper>
                <S.FieldWrapper>
                    <S.Text $size={"16px"}>이번주 얻은 경험치</S.Text>
                    <S.Text $size={"16px"}>{data.week}</S.Text>
                </S.FieldWrapper>
                <S.FieldWrapper>
                    <S.Text $size={"16px"} $color={"#aaa"}>전주 대비 상승</S.Text>
                    <S.Text $size={"16px"} $color={"#aaa"}>{data.incrementByWeek}</S.Text>
                </S.FieldWrapper>
                <S.FieldWrapper>
                    <S.Text $size={"16px"}>이번달 얻은 경험치</S.Text>
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

export default Experience;
