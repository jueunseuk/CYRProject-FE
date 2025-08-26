import * as C from "@/apis/calendar";
import * as S from "./styles";
import { useEffect, useState } from "react";
import pencil from "@/assets/icon/attendance/pencil.svg";
import unchecked from "@/assets/icon/etc/checked.svg";
import useUserInfo from "@/hooks/localStorage";

const CalendarRequest = () => {
    const user = useUserInfo();
    const [requests, setRequests] = useState([]);
    const [content, setContent] = useState("");

    useEffect(() => {
        const fetchRequests = async () => {
            try {
                const response = await C.getCalendarRequest();
                setRequests(response.data);
            } catch(error) {

            }
        }

        fetchRequests();
    }, []);

    const handleRequestProcess = async (calendarRequestId) => {
        try {
            await C.patchRequestProcess({calendarRequestId});
            setRequests(prev => prev.filter(request => request.calendarRequestId !== calendarRequestId));
        } catch(error) {

        }
    };

    const handleUploadRequest = async () => {
        try {
            if(content.length < 5) {
                alert("내용의 길이가 너무 짧습니다.\n최소 5자 이상 작성해주세요!");
                return;
            }
            await C.postCalendarRequest({content});
            window.location.reload();
        } catch(error) {

        }
    };

    return (
        <>
            <S.Wrapper>
                <S.RequestArea>
                    <S.HorizontalWrapper $justify={"space-between"} style={{marginBottom: "5px"}}>
                        <S.InputField value={content} onChange={(e) => setContent(e.target.value)}/>
                        <S.RequestButton onClick={handleUploadRequest}>요청하기</S.RequestButton>
                    </S.HorizontalWrapper>
                    <S.Text $color={"#878787"} $size={"11px"}>캘린더에 등록되지 않거나 수정해야할 스케줄이 있다면 알려주세요!</S.Text>
                    <S.Text $color={"#878787"} $size={"11px"}>확인된 요청은 별도의 통지없이 삭제됩니다.</S.Text>
                </S.RequestArea>

                {requests.map((request) => (
                    <S.RequestBlock key={request.calendarRequestId} >
                        <S.UserProfile src={request.profileImageUrl} />
                        <S.ContentBox>
                            <S.HorizontalWrapper $justify={"space-between"}>
                                <S.HorizontalWrapper $justify={"flex-start"} $gap={"5px"}>
                                    <S.IconArea src={pencil} />
                                    <S.Text $weight={"700"}>{request.userNickname}</S.Text>
                                </S.HorizontalWrapper>
                                {(user.role === "MANAGER" || user.role === "ADMIN") && <S.IconArea title="완료로 표시" src={unchecked} style={{cursor: "pointer", width: "13px", height: "13px"}} onClick={() => handleRequestProcess(request.calendarRequestId)} />}
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