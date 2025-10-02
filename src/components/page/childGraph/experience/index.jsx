import * as S from "./styles";
import * as E from "@/apis/experience";
import ExperienceGraph from "@/components/graph/experienceGraph";
import { useEffect, useState } from "react";

const Experience = ({userId}) => {
    const [data, setData] = useState({});
    const [graphData, setGraphData] = useState(dummy);

    useEffect(() => {
        const fetchUserExperienceData = async () => {
        try {
            const response = await E.getUserExperienceData(userId);
            setData(response.data);
        } catch(error) {

        }
    };

        fetchUserExperienceData();
    }, [userId]);

    return (
        <S.Wrapper>
            <S.Text $size={"17px"} $weight={"700"} style={{alignSelf: "flex-start"}}>경험치</S.Text>
            <S.VerticalWrapper $ai={"center"} $gap={"5px"} style={{width: "95%", marginBottom: "25px"}}>
                <S.HorizontalWrapper $jc={"space-between"}>
                    <S.Text $size={"16px"}>현재 경험치</S.Text>
                    <S.Text $size={"16px"}>{data.current}</S.Text>
                </S.HorizontalWrapper>
                <S.HorizontalWrapper $jc={"space-between"}>
                    <S.Text $size={"16px"}>오늘 얻은 경험치</S.Text>
                    <S.Text $size={"16px"}>{data.today}</S.Text>
                </S.HorizontalWrapper>
                <S.HorizontalWrapper $jc={"space-between"}>
                    <S.Text $size={"16px"} $color={"#aaa"}>전일 대비 상승</S.Text>
                    <S.Text $size={"16px"} $color={"#aaa"}>{data.incrementByDay}</S.Text>
                </S.HorizontalWrapper>
                <S.HorizontalWrapper $jc={"space-between"}>
                    <S.Text $size={"16px"}>이번주 얻은 경험치</S.Text>
                    <S.Text $size={"16px"}>{data.week}</S.Text>
                </S.HorizontalWrapper>
                <S.HorizontalWrapper $jc={"space-between"}>
                    <S.Text $size={"16px"} $color={"#aaa"}>전주 대비 상승</S.Text>
                    <S.Text $size={"16px"} $color={"#aaa"}>{data.incrementByWeek}</S.Text>
                </S.HorizontalWrapper>
                <S.HorizontalWrapper $jc={"space-between"}>
                    <S.Text $size={"16px"}>이번달 얻은 경험치</S.Text>
                    <S.Text $size={"16px"}>{data.month}</S.Text>
                </S.HorizontalWrapper>
                <S.HorizontalWrapper $jc={"space-between"}>
                    <S.Text $size={"16px"} $color={"#aaa"}>전월 대비 상승</S.Text>
                    <S.Text $size={"16px"} $color={"#aaa"}>{data.incrementByMonth}</S.Text>
                </S.HorizontalWrapper>
            </S.VerticalWrapper>

            <S.Text $size={"17px"} $weight={"700"} style={{alignSelf: "flex-start"}}>히스토리</S.Text>
            <S.GraphWrapper>
                <ExperienceGraph data={graphData} />
            </S.GraphWrapper>
        </S.Wrapper>
    );
};

export default Experience;

const dummy = [
  {
    "id": "japan",
    "data": [
      {
        "x": "plane",
        "y": 286
      },
      {
        "x": "helicopter",
        "y": 238
      },
      {
        "x": "boat",
        "y": 205
      },
      {
        "x": "train",
        "y": 213
      },
      {
        "x": "subway",
        "y": 1
      },
      {
        "x": "bus",
        "y": 293
      },
      {
        "x": "car",
        "y": 152
      },
      {
        "x": "moto",
        "y": 43
      },
      {
        "x": "bicycle",
        "y": 213
      },
      {
        "x": "horse",
        "y": 136
      },
      {
        "x": "skateboard",
        "y": 192
      },
      {
        "x": "others",
        "y": 64
      }
    ]
  }
]