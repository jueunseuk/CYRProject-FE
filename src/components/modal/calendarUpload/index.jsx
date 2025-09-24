import * as C from "@/apis/calendar";
import * as S from "./styles";
import cancel from "@/assets/icon/gallery/cancel.svg";
import upload from "@/assets/icon/gallery/upload.svg";
import help from "@/assets/icon/gallery/help.svg";
import { useState } from "react";

const now = new Date();
const pad = (n) => n.toString().padStart(2, '0');
const today = `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}`;

const CalendarUpload = ({onClose}) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [date, setDate] = useState(today);
    const [type, setType] = useState("BROADCAST");
    
    const requestCalenarUpload = async () => {
        try {
            await C.postCalendar({title, description, date, type});
            alert("일정 업로드 완료!");
            window.location.reload();
        } catch(error) {

        }
    }

    return (
        <>
            <S.Wrapper>
                <S.Content>
                    <S.HorizontalWrapper $justify={"space-between"}>
                        <S.TooltipWrapper>
                            <S.Icon src={help} $width={"15px"} $height={"15px"}></S.Icon>
                            <S.TooltipText>
                                <p style={{fontSize: "16px", fontWeight:"700", marginBottom: "5px"}}>캘린더 업로드 가이드</p>
                                <p style={{fontSize:"14px"}}>1. 일정 이름은 최대한 간단하게 나타내면 좋아요.</p>
                                <p style={{fontSize:"14px"}}>2. 일정 설명은 자세한 시각, 장소 등을 전부 알려주세요.</p>
                                <p style={{fontSize:"14px"}}>3. 일정 타입은 꼭 일정의 성격에 맞게 분류해주세요.</p>
                            </S.TooltipText>
                        </S.TooltipWrapper>
                        <S.Icon src={upload} $width={"25px"} $height={"25px"}></S.Icon>
                        <S.Icon src={cancel} onClick={onClose}></S.Icon>
                    </S.HorizontalWrapper>
                    <S.InputArea>
                        <S.HorizontalWrapper>
                            <S.Text $size={"16px"} $weight={"700"}>일정 이름</S.Text>
                        </S.HorizontalWrapper>
                        <S.InputTitle value={title} onChange={(e) => setTitle(e.target.value)}></S.InputTitle>
                    </S.InputArea>
                    <S.InputArea>
                        <S.HorizontalWrapper>
                            <S.Text $size={"16px"} $weight={"700"}>일정 설명</S.Text>
                        </S.HorizontalWrapper>
                        <S.InputDesc value={description} onChange={(e) => setDescription(e.target.value)}></S.InputDesc>
                    </S.InputArea>
                    <S.InputArea>
                        <S.HorizontalWrapper>
                            <S.Text $size={"16px"} $weight={"700"}>일정 날짜</S.Text>
                        </S.HorizontalWrapper>
                        <S.InputDate value={date} onChange={(e) => setDate(e.target.value)}></S.InputDate>
                    </S.InputArea>
                    <S.InputArea>
                        <S.HorizontalWrapper>
                            <S.Text $size={"16px"} $weight={"700"}>일정 타입</S.Text>
                        </S.HorizontalWrapper>
                        <S.InputType size={1} value={type} onChange={(e) => setType(e.target.value)}>
                            <S.Option value="BROADCAST">방송</S.Option>
                            <S.Option value="RADIO">라디오</S.Option>
                            <S.Option value="CONCERT">콘서트</S.Option>
                            <S.Option value="UNIV">대학 행사</S.Option>
                            <S.Option value="FESTIVAL">페스티벌</S.Option>
                            <S.Option value="ANNIERSARY">기념일</S.Option>
                            <S.Option value="BIRTHDAY">생일</S.Option>
                            <S.Option value="RELEASE">앨범 발매</S.Option>
                            <S.Option value="ETC">기타</S.Option>
                        </S.InputType>
                    </S.InputArea>
                    <S.SubmitButton disabled={title.length < 3 ||
                        title.length > 15 ||
                        description.length < 5 ||
                        date.length === 0 ||
                        type.length === 0}
                        onClick={requestCalenarUpload}
                    >일정 업로드</S.SubmitButton>
                </S.Content>
            </S.Wrapper>
        </>
    );
}

export default CalendarUpload;