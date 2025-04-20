import * as S from "./styles";
import { useParams } from "react-router-dom";
import { BOARD_DESCRIPTIONS } from "@/constants/boardsDesc";
import CalendarComponent from "@/components/calendar/calendarComponent";

const CalendarBoard = () => {
    const {subPath} = useParams();
    const boardInfo = BOARD_DESCRIPTIONS[subPath];
    const boardId = 7;

    return (
        <>
            <S.Wrapper>
                <S.Title>{boardInfo.label}</S.Title>
                <S.Description>{boardInfo.description}</S.Description>
                <CalendarComponent />
                
            </S.Wrapper>
        </>
    )
}

export default CalendarBoard;