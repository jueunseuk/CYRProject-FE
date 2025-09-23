import * as C from "@/apis/calendar";
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
    const [scheduleMap, setScheduleMap] = useState({});

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

    useEffect(() => {
        const fetchSchedule = async () => {
            try {
                const {data} = await C.getCalendar(year, month);
                setScheduleMap(data.schedule ?? {});
            } catch(error) {

            }
        };

        fetchSchedule();
    }, [month, year]);

    const getColor = (e) => {
        if(e % 7 === 0) {
            return "red";
        } else if(e % 7 === 6) {
            return "blue";
        } else {
            return "black";
        }
    };

    const getScheduleColor = (type) => {
        switch(type) {
            case "BROADCAST" : return "#F44336"; // red
            case "RADIO" : return "#FF9800"; // orange
            case "CONCERT" : return "#9C27B0"; // purple
            case "UNIV" : return "#3F51B5"; // indigo
            case "FESTIVAL" : return "#2196F3"; // blue
            case "ANNIVERSARY" : return "#4CAF50"; // green
            case "BIRTHDAY" : return "#C6BC73"; // signiture
            case "RELEASE" : return "#FF3399"; // pink
            case "ETC" : return "#878787"; // gray
        };
    };

    return (
        <>
            <S.Wrapper>
                <S.HorizontalWrapper $gap={"120px"}>
                    <S.Text $size={"28px"} $weight={"200"} style={{cursor: "pointer", userSelect: "none"}} onMouseDown={() => handleCurrentMonthValue(-1)}>&lt;</S.Text>
                    <S.Text $size={"28px"} $weight={"700"} style={{width: "140px", textAlign: "center"}}>{`${year} . ${formatMonth}`}</S.Text>
                    <S.Text $size={"28px"} $weight={"200"} style={{cursor: "pointer", userSelect: "none"}} onMouseDown={() => handleCurrentMonthValue(1)}>&gt;</S.Text>
                </S.HorizontalWrapper>

                <S.HorizontalWrapper $gap={"10px"} $justify={"flex-end"} style={{marginTop: "25px", marginBottom: "10px", padding: "0 13px"}}>
                    <S.Legend>
                        <S.Circle $bg={"#F44336"} />
                        <S.Text $size={"13px"} $weight={"500"}>방송</S.Text>
                    </S.Legend>
                    <S.Legend>
                        <S.Circle $bg={"#FF9800"} />
                        <S.Text $size={"13px"} $weight={"500"}>라디오</S.Text>
                    </S.Legend>
                    <S.Legend>
                        <S.Circle $bg={"#9C27B0"} />
                        <S.Text $size={"13px"} $weight={"500"}>콘서트</S.Text>
                    </S.Legend>
                    <S.Legend>
                        <S.Circle $bg={"#3F51B5"} />
                        <S.Text $size={"13px"} $weight={"500"}>대학 행사</S.Text>
                    </S.Legend>
                    <S.Legend>
                        <S.Circle $bg={"#2196F3"} />
                        <S.Text $size={"13px"} $weight={"500"}>페스티벌</S.Text>
                    </S.Legend>
                    <S.Legend>
                        <S.Circle $bg={"#4CAF50"} />
                        <S.Text $size={"13px"} $weight={"500"}>기념일</S.Text>
                    </S.Legend>
                    <S.Legend>
                        <S.Circle $bg={"#C6BC73"} />
                        <S.Text $size={"13px"} $weight={"500"}>생일</S.Text>
                    </S.Legend>
                    <S.Legend>
                        <S.Circle $bg={"#FF3399"} />
                        <S.Text $size={"13px"} $weight={"500"}>앨범 발매</S.Text>
                    </S.Legend>
                    <S.Legend>
                        <S.Circle $bg={"#878787"} />
                        <S.Text $size={"13px"} $weight={"500"}>기타</S.Text>
                    </S.Legend>
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
                        {array.map((value, idx) => {
                            const daySchedules = scheduleMap[value] || [];
                            const isToday      = value === now.getDate() &&
                                                month === now.getMonth() + 1 &&
                                                year  === now.getFullYear();

                            return (
                                <S.DateItem key={idx} $bg={value === 0 ? "#EEE" : isToday ? "#F4F3E9" : "white"} $border={isToday ? "2px" : "1px"} $hoverable={value !== 0}>
                                    <S.Text $size="13px" $weight="700" $color={getColor(idx)}>{value || ""}</S.Text>
                                    <S.HorizontalWrapper $gap={"8px"} $align={"flex-start"} $justify={"flex-start"} style={{flexWrap: "wrap"}} className="date-content">
                                        {daySchedules.map(s => (
                                            <S.ScheduleWrapper key={s.calendarId}>
                                                <S.Circle $bg={() => getScheduleColor(s.type)} />
                                                <S.Text $size="10px" $weight="700" className="calendar-text" title={s.description}>{s.title}</S.Text>
                                            </S.ScheduleWrapper>
                                        ))}
                                    </S.HorizontalWrapper>
                                </S.DateItem>
                            );
                        })}
                        </S.DateWrapper>
                </S.CalendarWrapper>
            </S.Wrapper>
        </>
    )
}

export default CalendarComponent;