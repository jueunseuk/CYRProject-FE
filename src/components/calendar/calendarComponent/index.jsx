import * as S from "./styles";
import { useEffect, useState } from "react";

const maxDate = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

const CalendarComponent = () => {
    const now = new Date();
    const [year, setYear] = useState(now.getFullYear());
    const [month, setMonth] = useState(now.getMonth()+1);
    const [formatMonth, setFormatMonth] = useState(`${month}`.padStart(2, "0"));
    const [date, setDate] = useState(now.getDate());
    const [day, setDay] = useState(now.getDay());
    const [array, setArray] = useState([]);

    const handleCurrentMonthValue = (e) => {
        const temp = month+e;
        if(temp == 0) {
            setYear(year-1);
            setMonth(12);
        } else if(temp == 13) {
            setYear(year+1);
            setMonth(1);
        } else {
            setMonth(temp);
        }
    }

    useEffect(() => {
        const fetchFormatMonth = () => {
            setFormatMonth(`${month}`.padStart(2, "0"));
    
            const isLeap = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
            let temp;
    
            if (month === 2 && isLeap) {
                temp = Array.from({ length: 29 }, (_, i) => i + 1);
            } else {
                temp = Array.from({ length: maxDate[month - 1] }, (_, i) => i + 1);
            }
    
            const firstDay = new Date(year, month - 1, 1).getDay();
            for (let i = 0; i < firstDay; i++) {
                temp.unshift(0);
            }
    
            setArray(temp);
        };
    
        fetchFormatMonth();
    }, [month]);

    const getColor = (e) => {
        if(e % 7 === 0) {
            return "red";
        } else if(e % 7 === 6) {
            return "blue";
        } else {
            return "black";
        }
    };

    return (
        <>
            <S.Wrapper>
                <S.HorizontalWrapper $gap={"120px"}>
                    <S.Text $size={"28px"} $weight={"200"} style={{cursor: "pointer"}} onMouseDown={() => handleCurrentMonthValue(-1)}>&lt;</S.Text>
                    <S.Text $size={"28px"} $weight={"700"}>{`${year} . ${formatMonth}`}</S.Text>
                    <S.Text $size={"28px"} $weight={"200"} style={{cursor: "pointer"}} onMouseDown={() => handleCurrentMonthValue(1)}>&gt;</S.Text>
                </S.HorizontalWrapper>
                <S.CalendarWrapper>
                    <S.DayWrapper>
                        <S.DayItem $color={"red"}>일</S.DayItem>
                        <S.DayItem>월</S.DayItem>
                        <S.DayItem>화</S.DayItem>
                        <S.DayItem>수</S.DayItem>
                        <S.DayItem>목</S.DayItem>
                        <S.DayItem>금</S.DayItem>
                        <S.DayItem $color={"blue"}>토</S.DayItem>
                    </S.DayWrapper>

                    <S.DateWrapper>
                        {array.map((value, idx) => (
                            <S.DateItem key={idx} $bg={value === 0 ? "#EEE" : "white"} $hoverable={value !== 0}>
                                <S.Text $size={"13px"} $weight={"700"} $color={() => getColor(idx)}>{value !== 0 ? value : ""}</S.Text>
                            </S.DateItem>
                        ))}
                    </S.DateWrapper>
                </S.CalendarWrapper>
            </S.Wrapper>
        </>
    )
}

export default CalendarComponent;