import * as S from "./styls";
import * as BC from "@/common/basic/BasicComponent";
import * as C from "@/apis/chat";
import search from "@/assets/icon/chat/search.svg";
import Chatpage from "../chatPage";
import { useEffect, useState } from "react";
import { formatDate } from "@/util/dateFormatter";

const MessageList = () => {
    const [chatRoomData, setChatRoomData] = useState([]);
    const [selectChatRoom, setSelectChatRoom] = useState({});
    const [openChatPageModal, setOpenChatPageModel] = useState(false);

    const fetchMessageList = async () => {
        try {
            const response = await C.getChatRoomList();
            setChatRoomData(response.data);
        } catch(error) {

        }
    };

    useEffect(() => {
        fetchMessageList();
    }, [openChatPageModal]);

    const getMessageType = (type) => {
        switch(type) {
            case "SYSTEM" : return "시스템";
            case "TEXT" : return "대화";
            case "IMAGE" : return "이미지";
            case "FILE" : return "파일";
        }
    };

    const getMemberCountColor = (totalMember, maxMember) => {
        if(totalMember === maxMember) {
            return "red";
        } else {
            return `${totalMember}/${maxMember}`;
        }
    };
    
    return (
        <S.Wrapper>
            {openChatPageModal && <Chatpage chatRoom={selectChatRoom} onClose={() => {setOpenChatPageModel(false); fetchMessageList()}}/>}
            <BC.HorizontalWrapper $gap={"15px"} style={{width: "100%"}}>
                <BC.Icon src={search}/>
                <BC.Input type="text" $w={"70%"} style={{padding: "5px", border: "none", borderBottom: "1px solid black", background: "linear-gradient(0deg, #F0F0F0, white 30%)"}}
                    placeholder="그룹 이름으로 검색.."
                />
            </BC.HorizontalWrapper>
            <BC.Text $size={"12px"} style={{textAlign: "center", padding: "10px 0 0 0"}}>총 <BC.Text $weight={"600"} style={{display: "inline"}}>{chatRoomData.length}</BC.Text>개의 방</BC.Text>
            <BC.VerticalWrapper style={{borderTop: "1px solid #ddd"}}>
                {chatRoomData.map((chatRoom) => (
                    <S.ChatListItem key={chatRoom.chatRoomId} onClick={() => {setSelectChatRoom(chatRoom); setOpenChatPageModel(true);}}>
                        <BC.VerticalWrapper $ai={"flex-start"} $gap={"5px"}>
                            <BC.Text $size={"15px"} $weight={"600"}>{chatRoom.name}</BC.Text>
                            <BC.HorizontalWrapper $gap={"7px"}>
                                <BC.Text $size={"13px"} style={{padding: "1px 3px", backgroundColor: "#ddd", borderRadius: "4px"}}>{getMessageType(chatRoom.lastMessgaetType)}</BC.Text>
                                <BC.Text $size={"13px"} style={{width: "200px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis"}} >{chatRoom.lastMessgaetType === "IMAGE" ? "이미지" : chatRoom.lastContent}</BC.Text>
                            </BC.HorizontalWrapper>
                        </BC.VerticalWrapper>
                        <BC.VerticalWrapper $jc={"space-between"} $ai={"flex-end"} style={{width: "50px", height: "100%"}}>
                            <BC.Text $weight={"500"} $color={getMemberCountColor(chatRoom.totalMember, chatRoom.maxMember)}>{`${chatRoom.totalMember}/${chatRoom.maxMember}`}</BC.Text>
                            <BC.Text $color={"#878787"}>{formatDate(chatRoom.lastUpdatedAt, 3)}</BC.Text>
                        </BC.VerticalWrapper>
                    </S.ChatListItem>
                ))}
            </BC.VerticalWrapper>
        </S.Wrapper>
    );
};

export default MessageList;