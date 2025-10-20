import * as S from "./styles";
import * as C from "@/apis/complaint";
import { formatDate } from "@/util/dateFormatter";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ComplaintProcess = ({onClose, complaintId}) => {
    const navigate = useNavigate();
    const [complaintData, setComplaintData] = useState({});
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(true);

    const rejectComplaint = async () => {
        try {
            const form = new FormData();
            form.append("message", message);
            await C.rejectComplaint(complaintId, form);
            onClose();
        } catch(error) {

        }
    };

    const acceptComplaint = async () => {
        try {
            const form = new FormData();
            form.append("message", message);
            await C.acceptComplaint(complaintId, form);
            onClose();
        } catch(error) {

        }
    };

    const fetchComplaint = async () => {
        try {
            const response = await C.getComplaint(complaintId);
            setComplaintData(response.data);
            setLoading(false);
        } catch(error) {

        }
    };

    useEffect(() => {
        fetchComplaint();
    }, []);

    const getStatusAttribute = (status) => {
        if(status === "ACCEPT") {
            return {"color": "white", "bg": "#4AC5F3"};
        } else if(status === "WAIT") {
            return {"color": "white", "bg": "#4b4b4bff"};
        } else if(status === "REJECT") {
            return {"color": "white", "bg": "#f34a4aff"};
        } else {
            return {"color": "", "bg": ""};
        }
    };

    return (
        <>
            <S.Wrapper>
                {loading ?
                    <S.Loading>
                        <S.Text $color={"#878787"} $size={"15px"}>로딩 중..</S.Text>
                    </S.Loading>
                    :
                    <S.Content>
                        <S.Text $size={"20px"} $weight={"700"} style={{textAlign: "center", width: "100%"}}>신고 내용</S.Text>
                        <S.VerticalWrapper $gap={"10px"}>
                            <S.Image src={complaintData.captureUrl}/>
                            <S.HorizontalWrapper $gap={"10px"}>
                                <S.Text $size={"16px"} $weight={"700"}>제목</S.Text>
                                <S.Text>{complaintData.title}</S.Text>
                            </S.HorizontalWrapper>
                            <S.HorizontalWrapper $gap={"10px"}>
                                <S.Text $size={"16px"} $weight={"700"}>작성자</S.Text>
                                <S.Text onClick={() => navigate(`/users/${complaintData.userId}`)} style={{cursor: "pointer"}}>{complaintData.nickname}</S.Text>
                            </S.HorizontalWrapper>
                            <S.HorizontalWrapper $gap={"10px"}>
                                <S.Text $size={"16px"} $weight={"700"}>작성일</S.Text>
                                <S.Text>{formatDate(complaintData.createdAt, 7)}</S.Text>
                            </S.HorizontalWrapper>
                            <S.HorizontalWrapper $gap={"10px"}>
                                <S.Text $size={"16px"} $weight={"700"}>유형</S.Text>
                                <S.Text>{complaintData.categoryKorean}</S.Text>
                            </S.HorizontalWrapper>
                            <S.HorizontalWrapper $gap={"10px"}>
                                <S.Text $size={"16px"} $weight={"700"}>신고 사유</S.Text>
                                <S.Text>{complaintData.reason}</S.Text>
                            </S.HorizontalWrapper>
                            <S.HorizontalWrapper $gap={"10px"}>
                                <S.Text $size={"16px"} $weight={"700"}>처리 상태</S.Text>
                                <S.Text $size={"12px"} $color={getStatusAttribute(complaintData.status).color} style={{backgroundColor:getStatusAttribute(complaintData.status).bg, borderRadius: "5px", padding: "2px 7px"}}>{complaintData.status}</S.Text>
                            </S.HorizontalWrapper>
                            {complaintData.status !== "WAIT" ?
                                <S.VerticalWrapper $gap={"6px"}>
                                    <S.HorizontalWrapper $gap={"10px"}>
                                        <S.Text $size={"16px"} $weight={"700"}>처리자</S.Text>
                                        <S.Text>{complaintData.processorNickname}</S.Text>
                                    </S.HorizontalWrapper>
                                    <S.HorizontalWrapper $gap={"10px"}>
                                        <S.Text $size={"16px"} $weight={"700"}>처리 사유</S.Text>
                                        <S.Text>{complaintData.processedMessage}</S.Text>
                                    </S.HorizontalWrapper>
                                    <S.HorizontalWrapper $gap={"10px"}>
                                        <S.Text $size={"16px"} $weight={"700"}>처리 일시</S.Text>
                                        <S.Text>{formatDate(complaintData.processedAt, 7)}</S.Text>
                                    </S.HorizontalWrapper>
                                </S.VerticalWrapper>
                                :
                                <S.VerticalWrapper $gap={"6px"}>
                                    <S.Text $size={"16px"} $weight={"700"}>처리 사유</S.Text>
                                    <S.InputReason value={message} onChange={(e) => setMessage(e.target.value)}/>
                                </S.VerticalWrapper>
                            }
                        </S.VerticalWrapper>
                        {complaintData.status === "WAIT" ?
                            <S.HorizontalWrapper $jc={"center"} $gap={"15px"} style={{width: "100%"}}>
                                <S.Button disabled={message.length < 1} $bg={"#4AC5F3"} onClick={acceptComplaint}>수락</S.Button>
                                <S.Button $bg={"#4b4b4bff"} onClick={onClose}>보류</S.Button>
                                <S.Button disabled={message.length < 1} $bg={"#f34a4aff"} onClick={rejectComplaint}>거절</S.Button>
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

export default ComplaintProcess;