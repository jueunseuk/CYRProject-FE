import * as S from "./styls";
import * as BC from "@/common/basic/BasicComponent";
import * as C from "@/apis/chat";
import search from "@/assets/icon/chat/search.svg";
import Chatpage from "../chatPage";
import { useEffect, useState } from "react";
import { formatDate } from "@/util/dateFormatter";

const MessageList = () => {
    const [chatRoomData, setChatRoomData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [selectChatRoom, setSelectChatRoom] = useState({});
    const [openChatPageModal, setOpenChatPageModel] = useState(false);
    const [searchText, setSearchText] = useState("");

    const fetchMessageList = async () => {
        try {
            const response = await C.getChatRoomList();
            setChatRoomData(response.data);
            setFilteredData(response.data);
        } catch(error) {

        }
    };

    useEffect(() => {
        fetchMessageList();
    }, [openChatPageModal]);

    const handleSearch = (e) => {
        const value = e.target.value.toLowerCase();
        setSearchText(value);
        const filtered = chatRoomData.filter((room) =>
            room.name.toLowerCase().includes(value)
        );
        setFilteredData(filtered);
    };

    const getMessageType = (type) => {
        switch(type) {
            case "SYSTEM" : return "시스템";
            case "TEXT" : return "대화";
            case "IMAGE" : return "이미지";
            case "EMOTICON" : return "이모티콘";
        }
    };

    const getLastMessageContent = (chatRoom) => {
        switch(chatRoom.lastMessgaetType) {
            case "IMAGE" : return "(이미지)";
            case "EMOTICON" : return "(이모티콘)";
            default : return chatRoom.lastContent;
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
                <BC.Input type="search" $w={"70%"} style={{padding: "5px", border: "none", borderBottom: "1px solid black", background: "linear-gradient(0deg, #F8F8F8, white 30%)"}}
                    placeholder="그룹 이름으로 검색.."
                    onChange={handleSearch}
                />
            </BC.HorizontalWrapper>
            <BC.Text $size={"12px"} style={{textAlign: "center", padding: "10px 0 0 0"}}>총 <BC.Text $weight={"600"} style={{display: "inline"}}>{filteredData.length}</BC.Text>개의 방</BC.Text>
            <BC.VerticalWrapper style={{borderTop: "1px solid #ddd"}}>
                {filteredData.length === 0 ?
                    <BC.Text $size={"13px"} $color={"#878787"} style={{padding: "20px"}}>채팅 그룹이 없습니다..</BC.Text>
                :
                    filteredData.map((chatRoom) => (
                        <S.ChatListItem key={chatRoom.chatRoomId} onClick={() => {setSelectChatRoom(chatRoom); setOpenChatPageModel(true);}}>
                            <BC.VerticalWrapper $ai={"flex-start"} $gap={"5px"}>
                                <BC.Text $size={"15px"} $weight={"600"}>{chatRoom.name}</BC.Text>
                                <BC.HorizontalWrapper $gap={"7px"}>
                                    <BC.Text $size={"13px"} style={{padding: "1px 3px", backgroundColor: "#ddd", borderRadius: "4px"}}>{getMessageType(chatRoom.lastMessgaetType)}</BC.Text>
                                    <BC.Text $size={"13px"} style={{width: "200px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis"}} >{getLastMessageContent(chatRoom)}</BC.Text>
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