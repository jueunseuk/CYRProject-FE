import * as S from "./styls";
import * as BC from "@/common/basic/BasicComponent";
import * as C from "@/apis/chat";
import cancel from "@/assets/icon/etc/cancel.svg";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Chatpage from "../chatPage";

const Plus = ({onClose}) => {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [maxMember, setMaxMember] = useState(3);
    const [openChatPageModal, setOpenChatPageModel] = useState(false);
    const [selectChatRoom, setSelectChatRoom] = useState({});

    const handleCreateChatRoom = async () => {
        try {
            const form = {
                name, maxMember
            };
            
            const response = await C.createChatRoom(form);
            alert("채팅방 생성 완료!");

            if(response.data) {
                setSelectChatRoom(response.data);
                setOpenChatPageModel(true);
            }
        } catch (error) {

        }
    };

    useEffect(() => {
        if(maxMember < 3) {
            alert("그룹의 최소 인원은 3명입니다.");
            setMaxMember(3);
        }
        if(maxMember > 8) {
            alert("그룹의 최대 인원은 8명입니다.");
            setMaxMember(8);
        }
    }, [maxMember]);

    return (
        <S.Wrapper>
            {openChatPageModal && <Chatpage chatRoom={selectChatRoom} onClose={() => setOpenChatPageModel(false)} />}
            <BC.HorizontalWrapper $jc={"flex-end"} style={{width: "100%", padding: "15px"}}>
                <S.CancelIcon src={cancel} onClick={onClose} />
            </BC.HorizontalWrapper>
            <BC.VerticalWrapper $gap={"75px"} style={{height: "100%"}}>
                <BC.VerticalWrapper $gap={"px"}>
                    <BC.Text $size={"15px"} $weight={"700"}>율톡 <BC.Text $size={"12px"} $weight={"500"} style={{display: "inline", fontFamily: "serif", fontStyle: "italic"}}>beta</BC.Text></BC.Text>
                    <BC.Text $size={"20px"} $weight={"700"} style={{textAlign: "center", cursor: "default"}}>그룹을 만들고 사람들을 초대해보세요!</BC.Text>
                </BC.VerticalWrapper>
                <BC.VerticalWrapper $gap={"30px"}>
                    <BC.VerticalWrapper $gap={"7px"}>
                        <BC.Text $size={"15px"} $weight={"600"}>그룹 이름</BC.Text>
                        <S.Input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="그룹의 이름을 입력해주세요.." $width={"75%"} />
                    </BC.VerticalWrapper>
                    <BC.VerticalWrapper $gap={"7px"}>
                        <BC.Text $size={"15px"} $weight={"600"}>최대 인원</BC.Text>
                        <BC.HorizontalWrapper $gap={"15px"}>
                            <BC.Text $size={"19px"} style={{cursor: "pointer"}} onClick={() => setMaxMember(maxMember-1)}>◀</BC.Text>
                            <S.Input value={maxMember} onChange={(e) => setMaxMember(e.target.value)} type="text" placeholder="최대 수용 인원을 입력해주세요.." $width={"30%"} style={{textAlign: "center"}} />
                            <BC.Text $size={"19px"} style={{cursor: "pointer"}} onClick={() => setMaxMember(maxMember+1)}>▶</BC.Text>
                        </BC.HorizontalWrapper>
                    </BC.VerticalWrapper>
                </BC.VerticalWrapper>
                <S.Button disabled={name.length < 1 || maxMember < 2} onClick={handleCreateChatRoom}>+ 그룹 만들기</S.Button>
            </BC.VerticalWrapper>
        </S.Wrapper>
    );
};

export default Plus;