import * as C from "@/apis/calendar";
import * as S from "./styles";
import { useEffect, useState } from "react";
import ScheduleFullScreen from "@/components/modal/scheduleFullScreen";
import { useNavigate } from "react-router-dom";

const MS_PER_DAY = 24 * 60 * 60 * 1000;

const CalendarSummary = () => {
    const navigate = useNavigate();
    const [period, setPeriod] = useState("after");
    const [beforeSchedule, setBeforeSchedule] = useState([]);
    const [afterSchedule, setAfterSchedule] = useState([]);
    const [isScheduleModalOpen, setIsScheduleModalOpen] = useState(false);
    const [selectedSchedule, setSelectedSchedule] = useState({});

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
            case "SALE" : return "#795548"; // brown
            case "ETC" : return "#999999ff"; // gray
        };
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
            return `D+${-diff}`;
        } else {
            return "TODAY";
        }
    };

    const currentSchedule = period === "after" ? afterSchedule : beforeSchedule;

    return (
        <>
            <S.Wrapper>
                {isScheduleModalOpen && <ScheduleFullScreen onClose={() => setIsScheduleModalOpen(false)} selectedSchedule={selectedSchedule}/>}
                <S.TitleArea>
                    <S.Text $size={"16px"} $weight={"600"}>일정</S.Text>
                    <S.Text $size={"12px"} $weight={"600"} $color={period === 'after' ? "black" : "#878787"} onClick={() => handlePeriodClick("after")}>다가오는 일정</S.Text>
                    <S.Text $size={"12px"} $weight={"600"} $color={"#878787"}>|</S.Text>
                    <S.Text $size={"12px"} $weight={"600"} $color={period === 'before' ? "black" : "#878787"} onClick={() => handlePeriodClick("before")}>지난 일정</S.Text>
                    <S.Text $size={"11px"} $weight={"600"} style={{marginLeft: "65px", cursor: "pointer"}}
                        onClick={() => navigate("/calendar")}
                    >더보기</S.Text>
                </S.TitleArea>
                <S.ContentArea>
                <S.ContentArea>
                    {currentSchedule.length === 0 ? (
                        <S.Text>일정이 없습니다.</S.Text>
                    ) : (
                        currentSchedule.slice(0, 5).map((item) => {
                            const leftText = getLeft(item.date);
                            return (
                                <S.HorizontalWrapper key={item.calendarId} onClick={() => {setSelectedSchedule(item); setIsScheduleModalOpen(true)}} style={{cursor: "pointer"}}>
                                    <S.LeftDays $bg={getScheduleColor(item.type)}>
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