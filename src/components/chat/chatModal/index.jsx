import * as S from "./styles";
import * as BC from "@/common/basic/BasicComponent";
import cancel from "@/assets/icon/etc/cancel.svg";
import friendIcon from "@/assets/icon/chat/friends.svg";
import messageIcon from "@/assets/icon/chat/message.svg";
import plus from "@/assets/icon/chat/plus.svg";
import search from "@/assets/icon/chat/search.svg";
import logo_text from "@/assets/icon/chat/logo_text.svg";
import logo_text2 from "@/assets/icon/chat/logo_text2.svg";
import MessageListSearch from "@/components/chat/messageListSearch";
import FriendList from "@/components/chat/friendsList";
import MessageList from "@/components/chat/messageList";
import Plus from "@/components/chat/plus";
import { useState } from "react";

const ChatModal = ({onClose}) => {
    const [selectTab, setSelectTab] = useState("plus");

    const getChatModalComponent = () => {
        switch(selectTab) {
            case "plus": return <Plus onClose={onClose} />;
            case "friends": return <FriendList />;
            case "messages": return <MessageList />;
            case "search": return <MessageListSearch />;
        }
    };

    return (
        <S.Wrapper>
            {selectTab !== "plus" && (
                <BC.VerticalWrapper>
                    <BC.HorizontalWrapper $jc={"space-between"} $ai={"center"} style={{width: "100%", padding: "10px", borderBottom: "1px solid #ddd"}}>
                        <S.CancelIcon src={cancel} style={{visibility: "hidden"}}/>
                        <BC.Icon $h={"20px"} src={logo_text} />
                        <S.CancelIcon src={cancel} onClick={onClose} />
                    </BC.HorizontalWrapper>
                </BC.VerticalWrapper>
            )}
            
            {getChatModalComponent()}

            <BC.HorizontalWrapper style={{width: "100%", borderTop: "1px solid #ddd", boxShadow: "0 0px 10px rgba(0, 0, 0, 0.1)"}}>
                <S.NavItem $gap={"10px"} $bg={selectTab === "plus" ? "#f0f0f0" : ""}
                    onClick={() => setSelectTab("plus")}
                    title="채팅 그룹 만들기"
                    >
                    <BC.Icon src={plus} $w={"18px"}/>
                </S.NavItem>
                <S.NavItem $gap={"5px"} $bg={selectTab === "messages" ? "#f0f0f0" : ""}
                    onClick={() => setSelectTab("messages")}
                    title="내가 참여중인 그룹"
                    >
                    <BC.Icon src={messageIcon} $w={"18px"}/>
                </S.NavItem>
                <S.NavItem $gap={"5px"} $bg={selectTab === "search" ? "#f0f0f0" : ""}
                    onClick={() => setSelectTab("search")}
                    title="다른 채팅 둘러보기"
                    >
                    <BC.Icon src={search} $w={"18px"}/>
                </S.NavItem>
                <S.NavItem $gap={"10px"} $bg={selectTab === "friends" ? "#f0f0f0" : ""}
                    onClick={() => setSelectTab("friends")}
                    title="채팅 가능한 유저 목록"
                >
                    <BC.Icon src={friendIcon} $w={"18px"}/>
                </S.NavItem>
            </BC.HorizontalWrapper>
        </S.Wrapper>
    );
};

export default ChatModal;