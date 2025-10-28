import * as S from "./styles";
import * as A from "@/apis/apply";
import { formatDate } from "@/util/dateFormatter";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ApplyConfirm = ({onClose, applyId}) => {
    const navigate = useNavigate();
    const [applyData, setApplyData] = useState({});
    const [loading, setLoading] = useState(true);

    const confirmApply = async () => {
        try {
            await A.confirmApply(applyId);
            onClose();
        } catch(error) {

        }
    };

    const fetchApply = async () => {
        try {
            const response = await A.getApply(applyId);
            setApplyData(response.data);
            setLoading(false);
        } catch(error) {

        }
    };

    useEffect(() => {
        fetchApply();
    }, []);

    const getStatusAttribute = (confirm) => {
        if(confirm) {
            return {"color": "white", "bg": "#4AC5F3"};
        } else {
            return {"color": "white", "bg": "#4b4b4bff"};
        }
    };

    const getPreferenceRole = (role) => {
        switch(role) {
            case "BOARD": return "게시판 관리";
            case "GALLERY": return "갤러리 관리";
            case "EVENT": return "이벤트 괸리";
            case "POLL": return "투표 관리";
            case "CALENDAR": return "캘린더 관리";
            case "COMPLAINT": return "신고 관리";
            case "QUIZ": return "퀴즈 관리";
            case "ETC": return "기타 관리";
            case "NONE": return "선택하지 않음";
        }
    }

    return (
        <>
            <S.Wrapper>
                {loading ?
                    <S.Loading>
                        <S.Text $color={"#878787"} $size={"15px"}>로딩 중..</S.Text>
                    </S.Loading>
                    :
                    <S.Content>
                        <S.Text $size={"20px"} $weight={"700"} style={{textAlign: "center", width: "100%"}}>신청서</S.Text>
                        <S.VerticalWrapper $gap={"20px"} style={{width: "100%"}}>
                            {applyData.captureUrl && <S.Image src={applyData.captureUrl}/>}
                            <S.HorizontalWrapper $gap={"10px"} style={{width: "100%"}}>
                                <S.Text $size={"16px"} $weight={"700"} style={{width: "30%"}}>제목</S.Text>
                                <S.Text>{applyData.title}</S.Text>
                            </S.HorizontalWrapper>
                            <S.HorizontalWrapper $gap={"10px"} style={{width: "100%"}}>
                                <S.Text $size={"16px"} $weight={"700"} style={{width: "30%"}}>작성자</S.Text>
                                <S.Text onClick={() => navigate(`/users/${applyData.userId}`)} style={{cursor: "pointer"}}>{applyData.nickname}</S.Text>
                            </S.HorizontalWrapper>
                            <S.HorizontalWrapper $gap={"10px"} style={{width: "100%"}}>
                                <S.Text $size={"16px"} $weight={"700"} style={{width: "30%"}}>주요 활동 시간대</S.Text>
                                <S.Text>{applyData.primaryTime}</S.Text>
                            </S.HorizontalWrapper>
                            <S.HorizontalWrapper $gap={"10px"} style={{width: "100%"}}>
                                <S.Text $size={"16px"} $weight={"700"} style={{width: "30%"}}>주간 접속 시간</S.Text>
                                <S.Text>{applyData.weeklyHour}</S.Text>
                            </S.HorizontalWrapper>
                            <S.HorizontalWrapper $gap={"10px"} style={{width: "100%"}}>
                                <S.Text $size={"16px"} $weight={"700"} style={{width: "30%"}}>선호하는 역할</S.Text>
                                <S.Text>{getPreferenceRole(applyData.preferenceRole)}</S.Text>
                            </S.HorizontalWrapper>
                            <S.HorizontalWrapper $gap={"10px"} style={{width: "100%"}}>
                                <S.Text $size={"16px"} $weight={"700"} style={{width: "30%"}}>신청 동기</S.Text>
                                <S.Text>{applyData.motive}</S.Text>
                            </S.HorizontalWrapper>
                            <S.HorizontalWrapper $gap={"10px"} style={{width: "100%"}}>
                                <S.Text $size={"16px"} $weight={"700"} style={{width: "30%"}}>선호하는 연락 수단</S.Text>
                                <S.Text>{applyData.preferenceMethod}</S.Text>
                            </S.HorizontalWrapper>
                            <S.HorizontalWrapper $gap={"10px"} style={{width: "100%"}}>
                                <S.Text $size={"16px"} $weight={"700"} style={{width: "30%"}}>연락처</S.Text>
                                <S.Text>{applyData.contact}</S.Text>
                            </S.HorizontalWrapper>
                            <S.HorizontalWrapper $gap={"10px"} style={{width: "100%"}}>
                                <S.Text $size={"16px"} $weight={"700"} style={{width: "30%"}}>작성일</S.Text>
                                <S.Text>{formatDate(applyData.createdAt, 7)}</S.Text>
                            </S.HorizontalWrapper>
                            <S.HorizontalWrapper $gap={"10px"} style={{width: "100%"}}>
                                <S.Text $size={"16px"} $weight={"700"} style={{width: "30%"}}>경고 받은 횟수</S.Text>
                                <S.Text>{applyData.warnCnt}</S.Text>
                            </S.HorizontalWrapper>
                            <S.HorizontalWrapper $gap={"10px"} style={{width: "100%"}}>
                                <S.Text $size={"16px"} $weight={"700"} style={{width: "30%"}}>확인 여부</S.Text>
                                <S.Text $size={"12px"} $color={getStatusAttribute(applyData.confirm).color} style={{backgroundColor:getStatusAttribute(applyData.confirm).bg, borderRadius: "5px", padding: "2px 7px"}}>{applyData.confirm ? "CONFIRM" : "WAIT"}</S.Text>
                            </S.HorizontalWrapper>
                            {applyData.confirm &&
                                <S.HorizontalWrapper $gap={"10px"} style={{width: "100%"}}>
                                    <S.Text $size={"16px"} $weight={"700"} style={{width: "30%"}}>확인한 관리자</S.Text>
                                    <S.Text onClick={() => navigate(`/users/${applyData.confirmUserId}`)} style={{cursor: "pointer"}}>{applyData.confirmUserNickname}</S.Text>
                                </S.HorizontalWrapper>
                            }
                            {applyData.confirm &&
                                <S.HorizontalWrapper $gap={"10px"} style={{width: "100%"}}>
                                    <S.Text $size={"16px"} $weight={"700"} style={{width: "30%"}}>확인 일시</S.Text>
                                    <S.Text>{formatDate(applyData.confirmedAt, 7)}</S.Text>
                                </S.HorizontalWrapper>
                            }
                        </S.VerticalWrapper>
                        {!applyData.confirm ?
                            <S.HorizontalWrapper $jc={"center"} $gap={"15px"} style={{width: "100%"}}>
                                <S.Button $bg={"#4AC5F3"} onClick={confirmApply}>확인</S.Button>
                                <S.Button $bg={"#bbbbbbff"} onClick={onClose}>닫기</S.Button>
                            </S.HorizontalWrapper>
                            :
                            <S.Button $bg={"#bbbbbbff"} onClick={onClose}>닫기</S.Button>
                        }
                    </S.Content>
                }
            </S.Wrapper>
        </>
    );
}

export default ApplyConfirm;