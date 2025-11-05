import * as C from "@/apis/calendar";
import * as S from "./styles";
import cancel from "@/assets/icon/gallery/cancel.svg";
import help from "@/assets/icon/gallery/help.svg";
import edit from "@/assets/icon/etc/edit.svg";
import trash from "@/assets/icon/etc/trash.svg";
import { useEffect, useState } from "react";
import CalendarEdit from "../calendarEdit";

const now = new Date();
const pad = (n) => n.toString().padStart(2, '0');
const today = `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}`;
const maxDate = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

const CalendarList = ({onClose}) => {
    const [year, setYear] = useState(now.getFullYear());
    const [month, setMonth] = useState(now.getMonth()+1);
    const [formatMonth, setFormatMonth] = useState(`${month}`.padStart(2, "0"));
    const [array, setArray] = useState([]);
    const [scheduleMap, setScheduleMap] = useState([]);
    const [isModifyModalOpen, setIsModifyModalOpen] = useState(false);
    const [selectItem, setSelectItem] = useState(null);

    const handleOpenModifyModal = (item) => {
        setSelectItem(item); 
        setIsModifyModalOpen(true);
    }
    const handleCloseModifyModal = () => {
        setIsModifyModalOpen(false);
        setSelectItem(null);
    }

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
                setScheduleMap(data.schedule ?? []);
                
            } catch(error) {

            }
        };

        fetchSchedule();
    }, [month, year]);

    const requestCalendarDelete = async (calendarId) => {
        try {
            await C.deleteCalendar({calendarId});
            alert("일정 삭제 완료!");
            
            setScheduleMap((prev) => {
            const newMap = { ...prev };
            for (const day in newMap) {
                newMap[day] = newMap[day].filter(
                    (item) => item.calendarId !== calendarId
                );

                if (newMap[day].length === 0) {
                    delete newMap[day];
                }
            }
            return newMap;
        });
        } catch(error) {

        }
    }

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
    
    return (
        <>
            <S.Wrapper>
                {isModifyModalOpen && <CalendarEdit onClose={handleCloseModifyModal} item={selectItem} />}
                <S.Content>
                    <S.HorizontalWrapper style={{justifyContent:"space-between"}}>
                        <S.Icon src={help} />
                        <S.HorizontalWrapper style={{justifyContent: "center", gap: "15px"}}>
                            <S.Text $size={"22px"} $weight={"500"} style={{cursor: "pointer", userSelect: "none"}} onMouseDown={() => handleCurrentMonthValue(-1)}>&lt;</S.Text>
                            <S.Text $size="28px" $weight="700" style={{width: "140px", textAlign: "center"}}>{`${year} . ${formatMonth}`}</S.Text>
                            <S.Text $size={"22px"} $weight={"500"} style={{cursor: "pointer", userSelect: "none"}} onMouseDown={() => handleCurrentMonthValue(1)}>&gt;</S.Text>
                        </S.HorizontalWrapper>
                        <S.Icon src={cancel} onClick={onClose}/>
                    </S.HorizontalWrapper>
                    <S.VerticalWrapper>
                        {Object.keys(scheduleMap).length === 0 ? (
                            <S.Text $size="14px" $color="#888888ff" style={{textAlign: "center"}}>
                                등록된 일정이 없습니다.
                            </S.Text>
                        ) : (
                        Object.entries(scheduleMap).map(([day, schedules]) => (
                            <S.ContentItem key={day}>
                                <S.Text $size="15px" $weight="600" style={{width: "40px", marginRight: "15px"}}>{day}일</S.Text>
                                <S.VerticalWrapper>
                                    {schedules.map((item) => (
                                        <S.VerticalWrapper key={item.calendarId} $gap={"3px"}>
                                            <S.HorizontalWrapper style={{gap: "10px"}}>
                                                <S.Icon $width="12px" $height="12px" src={edit} onClick={() => handleOpenModifyModal(item)}/>
                                                <S.Icon $width="12px" $height="12px" src={trash} onClick={() => requestCalendarDelete(item.calendarId)}/>
                                            </S.HorizontalWrapper>
                                            <S.Text $size="16px" $weight="600">{item.title} <S.Text $size="10px" $color={() => getScheduleColor(item.type)} $weight={"600"}>({item.type})</S.Text></S.Text>
                                            <S.Text $size="14px" style={{whiteSpace: "pre-line"}}>{item.description}</S.Text>
                                        </S.VerticalWrapper>
                                    ))}
                                </S.VerticalWrapper>
                            </S.ContentItem>
                        )))}
                    </S.VerticalWrapper>
                </S.Content>
            </S.Wrapper>
        </>
    );
}

export default CalendarList;