import * as C from "@/apis/calendar";
import * as S from "./styles";
import { useEffect, useState } from "react";
import pencil from "@/assets/icon/attendance/pencil.svg";

const CalendarRequest = () => {
    const [requests, setRequests] = useState([]);

    useEffect(() => {
        const fetchRequests = async () => {
            try {
                const response = await C.getCalendarRequest();
                setRequests(response.data);
                console.log(response.data)
            } catch(error) {

            }
        }

        fetchRequests();
    }, []);

    return (
        <>
            <S.Wrapper>
                <S.RequestArea>
                    <S.HorizontalWrapper $justify={"space-between"} style={{marginBottom: "5px"}}>
                        <S.InputField value={""} />
                        <S.RequestButton>요청하기</S.RequestButton>
                    </S.HorizontalWrapper>
                    <S.Text $color={"#878787"} $size={"11px"}>캘린더에 등록되지 않거나 수정해야할 스케줄이 있다면 알려주세요!</S.Text>
                    <S.Text $color={"#878787"} $size={"11px"}>확인된 요청은 별도의 통지없이 삭제됩니다.</S.Text>
                </S.RequestArea>

                {requests.map((request) => (
                    <S.RequestBlock key={request.calendarRequestId} >
                        <S.UserProfile src={request.profileImageUrl} />
                        <S.ContentBox>
                            <S.HorizontalWrapper $justify={"flex-start"} $gap={"5px"}>
                                <S.IconArea src={pencil} />
                                <S.Text $weight={"700"}>{request.userNickname}</S.Text>
                            </S.HorizontalWrapper>
                            <S.RequestTextBox>{request.content}</S.RequestTextBox>
                        </S.ContentBox>
                    </S.RequestBlock>
                ))}
            </S.Wrapper>
        </>
    )
};

export default CalendarRequest;