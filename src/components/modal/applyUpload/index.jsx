import * as A from "@/apis/apply";
import * as S from "./styles";
import { useState } from "react";

const ApplyUpload = ({onClose}) => {
    const [title, setTitle] = useState("");
    const [motive, setMotive] = useState("");
    const [primaryTime, setPrimaryTime] = useState("");
    const [weeklyHour, setWeeklyHour] = useState("");
    const [preferenceRole, setPreferenceRole] = useState("NONE");
    const [preferenceMethod, setPreferenceMethod] = useState("EMAIL");
    const [contact, setContact] = useState("");

    const requestUploadApply = async () => {
        try {
            const form = {
                title, motive, primaryTime, weeklyHour, preferenceMethod, preferenceRole, contact
            };
            await A.uploadApply(form);
            alert("매니저 신청을 완료했습니다.");
            onClose();
        } catch(error) {

        }
    };

    return (
        <>
            <S.Wrapper>
                <S.Content>
                    <S.Text $size={"20px"} $weight={"700"} style={{textAlign: "center", width: "100%"}}>신청 양식</S.Text>
                    <S.VerticalWrapper $gap={"15px"}>
                        <S.VerticalWrapper $gap={"5px"}>
                            <S.Text $size={"16px"} $weight={"700"}>제목</S.Text>
                            <S.InputText value={title} onChange={(e) => setTitle(e.target.value)} placeholder="제목을 간단히 입력해주세요.."/>
                        </S.VerticalWrapper>
                        <S.VerticalWrapper $gap={"5px"}>
                            <S.Text $size={"16px"} $weight={"700"}>주요 활동 시간대</S.Text>
                            <S.InputText value={primaryTime} onChange={(e) => setPrimaryTime(e.target.value)} placeholder="주로 활동하는 시간대를 자유롭게 적어주세요.."/>
                        </S.VerticalWrapper>
                        <S.VerticalWrapper $gap={"5px"}>
                            <S.Text $size={"16px"} $weight={"700"}>주간 접속 시간</S.Text>
                            <S.InputText value={weeklyHour} onChange={(e) => setWeeklyHour(e.target.value)} placeholder="일주일에 대략 몇시간 접속하는지 적어주세요.."/>
                        </S.VerticalWrapper>
                        <S.VerticalWrapper $gap={"5px"}>
                            <S.Text $size={"16px"} $weight={"700"}>신청 동기</S.Text>
                            <S.InputText value={motive} onChange={(e) => setMotive(e.target.value)} placeholder="신청하게 된 동기를 간단히 적어주세요.."/>
                        </S.VerticalWrapper>
                        <S.VerticalWrapper $gap={"5px"}>
                            <S.Text $size={"16px"} $weight={"700"}>선호하는 주요 역할</S.Text>
                            <S.Select value={preferenceRole} onChange={(e) => setPreferenceRole(e.target.value)}>
                                <S.Option value="post">선호 없음</S.Option>
                                <S.Option value="BOARD">게시판 관리</S.Option>
                                <S.Option value="GALLERY">갤러리 관리</S.Option>
                                <S.Option value="EVENT">이벤트 관리</S.Option>
                                <S.Option value="POLL">투표 관리</S.Option>
                                <S.Option value="CALENDAR">캘린더 관리</S.Option>
                                <S.Option value="COMPLAINT">신고 관리</S.Option>
                                <S.Option value="QUIZ">퀴즈 관리</S.Option>
                                <S.Option value="ETC">기타 관리</S.Option>
                            </S.Select>
                        </S.VerticalWrapper>
                        <S.VerticalWrapper $gap={"5px"}>
                            <S.Text $size={"16px"} $weight={"700"}>선호하는 연락 수단</S.Text>
                            <S.Select value={preferenceMethod} onChange={(e) => setPreferenceMethod(e.target.value)}>
                                <S.Option value="EMAIL">이메일</S.Option>
                                <S.Option value="CHAT">채팅(율톡)</S.Option>
                                <S.Option value="PHONE">전화번호</S.Option>
                            </S.Select>
                        </S.VerticalWrapper>
                        <S.VerticalWrapper $gap={"5px"}>
                            <S.Text $size={"16px"} $weight={"700"}>연락처</S.Text>
                            <S.InputText value={contact} onChange={(e) => setContact(e.target.value)} placeholder="연락 받을 연락처를 알려주세요.."/>
                        </S.VerticalWrapper>
                    </S.VerticalWrapper>

                    <S.HorizontalWrapper $jc={"center"} $gap={"15px"} style={{width: "100%"}}>
                        <S.HorizontalWrapper $jc={"center"} $gap={"15px"} style={{width: "100%"}}>
                            <S.Button disabled={
                                title.length < 1 ||
                                motive.length < 1 ||
                                primaryTime.length < 1 ||
                                weeklyHour.length < 1 ||
                                preferenceMethod.length < 1 ||
                                preferenceRole.length < 1 ||
                                contact.length < 1
                            } $bg={"#C6BC73"} onClick={requestUploadApply}>제출</S.Button>
                            <S.Button $bg={"#B7B7B7"} onClick={onClose}>취소</S.Button>
                        </S.HorizontalWrapper>
                    </S.HorizontalWrapper>
                </S.Content>
            </S.Wrapper>
        </>
    );
}

export default ApplyUpload;