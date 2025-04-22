import * as S from "./styles";
import { useParams } from "react-router-dom";
import { BOARD_DESCRIPTIONS } from "@/constants/boardsDesc";
import { useState } from "react";
import CalendarComponent from "@/components/calendar/calendarComponent";
import CalendarRequest from "@/components/calendar/calendarRequest";
import useUserInfo from "@/hooks/localStorage";
import upload from "@/assets/icon/gallery/upload.svg";
import CalendarUpload from "@/components/modal/calendarUpload";

const CalendarBoard = () => {
    const user = useUserInfo();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const {subPath} = useParams();

    const boardInfo = BOARD_DESCRIPTIONS[subPath];
    const boardId = 7;

    const handleOpenModal = () => {
        setIsModalOpen(true);
    }
    const handleCloseModal = () => {
        setIsModalOpen(false);
    }

    return (
        <>
            <S.Wrapper>
                {isModalOpen && <CalendarUpload onClose={handleCloseModal} />}
                <S.Title>{boardInfo.label}</S.Title>
                <S.Description>{boardInfo.description}</S.Description>
                <CalendarComponent />
                {user.role === "MANAGER" && <S.CalendarUploadButton onClick={handleOpenModal}><S.Icon src={upload}></S.Icon>일정 업로드</S.CalendarUploadButton>}
                <S.Title style={{marginTop: "45px"}}>일정 추가/수정 요청</S.Title>
                <CalendarRequest />
            </S.Wrapper>
        </>
    )
}

export default CalendarBoard;