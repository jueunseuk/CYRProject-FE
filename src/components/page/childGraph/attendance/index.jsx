import * as S from "./styles";
import * as C from "@/apis/cheer";
import att from "@/assets/icon/attendance/attendance_black.svg";
import CalendarGraph from "@/components/graph/calendarGraph";
import { useEffect, useState } from "react";

const Attendance = ({userId}) => {
    const [data, setData] = useState({});
    const [graphData, setGraphData] = useState([]);

    useEffect(() => {
        const fetchUserSandData = async () => {
            try {
                const response = await C.getUserCheerData(userId);
                setData(response.data);
            } catch(error) {

            }
        };

        const fetchUserSandHistory = async () => {
            try {
                const response = await C.getUserCheerHisotry(userId);
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
                <S.Text $size={"16px"} $weight={"700"} style={{alignSelf: "flex-start"}}>출석</S.Text>
                <S.Icon src={att} $height={"15px"}/>
            </S.HorizontalWrapper>
            <S.VerticalWrapper $ai={"center"} style={{marginBottom: "25px"}}>
                <S.FieldWrapper>
                    <S.Text $size={"16px"}>총 출석 수</S.Text>
                    <S.Text $size={"16px"}>{data.current}</S.Text>
                </S.FieldWrapper>
                <S.FieldWrapper>
                    <S.Text $size={"16px"}>현재 연속 출석 수</S.Text>
                    <S.Text $size={"16px"}>{data.current}</S.Text>
                </S.FieldWrapper>
                <S.FieldWrapper>
                    <S.Text $size={"16px"}>이번주 출석 수</S.Text>
                    <S.Text $size={"16px"}>{data.week}</S.Text>
                </S.FieldWrapper>
                <S.FieldWrapper>
                    <S.Text $size={"16px"} $color={"#aaa"}>전주 대비 상승</S.Text>
                    <S.Text $size={"16px"} $color={"#aaa"}>{data.incrementByWeek}</S.Text>
                </S.FieldWrapper>
                <S.FieldWrapper>
                    <S.Text $size={"16px"}>이번달 출석 수</S.Text>
                    <S.Text $size={"16px"}>{data.month}</S.Text>
                </S.FieldWrapper>
                <S.FieldWrapper>
                    <S.Text $size={"16px"} $color={"#aaa"}>전월 대비 상승</S.Text>
                    <S.Text $size={"16px"} $color={"#aaa"}>{data.incrementByWeek}</S.Text>
                </S.FieldWrapper>
                <S.FieldWrapper>
                    <S.Text $size={"16px"}>올해 출석 수</S.Text>
                    <S.Text $size={"16px"}>{data.month}</S.Text>
                </S.FieldWrapper>
                <S.FieldWrapper>
                    <S.Text $size={"16px"} $color={"#aaa"}>전년 대비 상승</S.Text>
                    <S.Text $size={"16px"} $color={"#aaa"}>{data.incrementByMonth}</S.Text>
                </S.FieldWrapper>
            </S.VerticalWrapper>

            <S.Text $size={"16px"} $weight={"700"} style={{alignSelf: "flex-start"}}>히스토리</S.Text>
            <S.GraphWrapper>
                {graphData[0]?.data.length === 0 ? 
                    <S.EmptyGraphWrapper>아직 아무런 활동 로그가 없어요..</S.EmptyGraphWrapper> : 
                    <CalendarGraph data={graphData}
                />}
            </S.GraphWrapper>
        </S.Wrapper>
    );
};

export default Attendance;