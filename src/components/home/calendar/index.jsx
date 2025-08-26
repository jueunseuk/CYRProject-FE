import * as C from "@/apis/calendar";
import * as S from "./styles";
import { useEffect, useState } from "react";

const MS_PER_DAY = 24 * 60 * 60 * 1000;

const CalendarSummary = () => {
    const [period, setPeriod] = useState("after");
    const [beforeSchedule, setBeforeSchedule] = useState([]);
    const [afterSchedule, setAfterSchedule] = useState([]);

    const handlePeriodClick = (value) => {
        setPeriod(value);
    };

    useEffect(() => {
        const fetchSchedule = async () => {
            try {
                const before = 30;
                const after = 30;
                const responseBefore = await C.getBeforeCalendar({before});
                const responseAfter = await C.getAfterCalendar({after});
                
                setBeforeSchedule(responseBefore.data || []);
                setAfterSchedule(responseAfter.data || []);
            } catch(error) {

            }
        };

        fetchSchedule();
    }, []);

    const getBgColor = text => {
        const days = parseInt(text.replace("D-", ""), 10);
        if(isNaN(days)) return "#C6BC73";
        if(days < 0) return "#B7B7B7";
        if (days <= 3)  return "#C6BC73";
        if (days <= 10) return "#C8C09B";
        if (days <= 30) return "#B7B7B7";
        return "#e0e0e0";
    };

    const getLeft = (dateStr) => {
        const today = new Date();
        const target = new Date(dateStr);
    
        today.setHours(0, 0, 0, 0);
        target.setHours(0, 0, 0, 0);
    
        const diff = (target.getTime() - today.getTime()) / MS_PER_DAY;
    
        if(diff > 0) {
            return `D-${diff}`;
        } else if(diff < 0) {
            return `D-${-diff}`;
        } else {
            return "TODAY";
        }
    };

    const currentSchedule = period === "after" ? afterSchedule : beforeSchedule;

    return (
        <>
            <S.Wrapper>
                <S.TitleArea>
                    <S.Text $size={"16px"} $weight={"600"}>일정</S.Text>
                    <S.Text $size={"12px"} $weight={"600"} $color={period === 'after' ? "black" : "#878787"} onClick={() => handlePeriodClick("after")}>다가오는 일정</S.Text>
                    <S.Text $size={"12px"} $weight={"600"} $color={"#878787"}>|</S.Text>
                    <S.Text $size={"12px"} $weight={"600"} $color={period === 'before' ? "black" : "#878787"} onClick={() => handlePeriodClick("before")}>지난 일정</S.Text>
                </S.TitleArea>
                <S.ContentArea>
                <S.ContentArea>
                    {currentSchedule.length === 0 ? (
                        <S.Text>일정이 없습니다.</S.Text>
                    ) : (
                        currentSchedule.map((item) => {
                            const leftText = getLeft(item.date);
                            return (
                                <S.HorizontalWrapper key={item.calendarId}>
                                    <S.LeftDays $bg={getBgColor(leftText)}>
                                        {leftText}
                                    </S.LeftDays>
                                    <S.Text title={`${item.type} : ${item.description}`} $size={"13px"}>{item.title}</S.Text>
                                </S.HorizontalWrapper>
                            )
                        })
                    )}
                </S.ContentArea>
                </S.ContentArea>
            </S.Wrapper>
        </>
    );
}

export default CalendarSummary;