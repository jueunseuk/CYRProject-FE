import * as S from "./styles";
import * as BC from "@/common/basic/BasicComponent";
import * as C from "@/apis/chat";
import back from "@/assets/icon/chat/back.svg";
import link from "@/assets/icon/chat/link.svg";
import linkS from "@/assets/icon/chat/link_select.svg";
import emoticon from "@/assets/icon/chat/emoticon.svg";
import exit from "@/assets/icon/chat/exit.svg";
import send from "@/assets/icon/chat/send.svg";
import sendd from "@/assets/icon/chat/send_disabled.svg";
import image from "@/assets/icon/board/gallery.svg";
import useUserInfo from "@/hooks/localStorage";
import TextMessage from "./text";
import SystemMessage from "./system";
import ImageMessage from "./image";
import { useEffect, useRef, useState } from "react";

import SockJS from "sockjs-client";
import { Client } from "@stomp/stompjs";
import LinkMessage from "./link";

const backendUrl = import.meta.env.VITE_BACKEND_BASE_URL;

const Chatpage = ({chatRoom, onClose}) => {
    const user = useUserInfo();
    const fileRef = useRef();
    const [currentMessage, setCurrentMessage] = useState("");
    const [imagePreview, setImagePreview] = useState(null);
    const [file, setFile] = useState(null);
    const [type, setType] = useState("TEXT");
    const [messageData, setMessageData] = useState([]);
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(30);
    const sort = "createdAt";
    const direction = "DESC";

    const [client, setClient] = useState(null);
    const [connected, setConnected] = useState(false);

    useEffect(() => {
        const socket = new SockJS(`${backendUrl}/ws/stomp`);
        const stompClient = new Client({
            webSocketFactory: () => socket,
            reconnectDelay: 5000,
            debug: (str) => console.log(str),
        });

        stompClient.onConnect = () => {
            console.log("✅ STOMP 연결 성공");
            setConnected(true);

            stompClient.subscribe(`/topic/chatroom.${chatRoom.chatRoomId}`, (message) => {
                const body = JSON.parse(message.body);
                setMessageData((prev) => [body, ...prev]);
            });
        };

        stompClient.activate();
        setClient(stompClient);

        return () => {
            if (stompClient.active) stompClient.deactivate();
        };
    }, []);

    const sendMessage = () => {
        if (!client || !connected || !currentMessage.trim()) return;

        const message = {
            "userId": user.userId,
            "content": currentMessage,
            "type": type
        };

        client.publish({
            destination: `/app/chat.send.${chatRoom.chatRoomId}`,
            body: JSON.stringify(message),
        });

        setCurrentMessage("");
        setType("TEXT");
    };

    const fetchChatMessage = async () => {
        try {
            const form = {page, size, sort, direction};
            const response = await C.getChatMessageList(chatRoom.chatRoomId, form);
            setMessageData(response.data);
        } catch(error) {

        }
    };

    useEffect(() => {
        fetchChatMessage();
    }, [page, size]);

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (!file) return;

        const previewUrl = URL.createObjectURL(file);
        setFile(file);
        setImagePreview(previewUrl);
        setType("IMAGE");
    };

    const handleRemoveImage = () => {
        setFile(null);
        setImagePreview("");
    };

    const getMessageComponent = (message) => {
        switch (message.type) {
            case "SYSTEM":
                return <SystemMessage message={message} />;
            case "IMAGE":
                return <ImageMessage message={message} isMine={user.userId === message.userId} />;
            case "LINK":
                return <LinkMessage message={message} isMine={user.userId === message.userId}/>
            default:
                return <TextMessage message={message} isMine={user.userId === message.userId} />;
        }
    };

    // 이미지 보낼 때 이미지 post API 후 response를 content로 받아서 send stomp하기
    // 이미지 띄우기 컴포넌트 수정
    // 이모티콘 간단하게 가져오기 API 만들어서 이모티콘 사용 모달 만들기
    // 이모티콘 띄우기 컴포넌트 수정

    return (
        <S.Wrapper>
            <BC.VerticalWrapper>
                <BC.HorizontalWrapper $jc={"space-between"} $ai={"center"} style={{width: "100%", padding: "10px", borderBottom: "1px solid #ddd"}}>
                    <S.TopIcon src={back} onClick={onClose} />
                    <BC.HorizontalWrapper $gap={"5px"}>
                        <BC.Text $size={"18px"} $weight={"700"}>{chatRoom.name}</BC.Text>
                        <BC.Text $size={"13px"} $weight={"500"}>({chatRoom.totalMember})</BC.Text>
                    </BC.HorizontalWrapper>
                    <S.TopIcon src={exit} title="그룹에서 나가기"/>
                </BC.HorizontalWrapper>
            </BC.VerticalWrapper>
            
            <S.ChatMessageWrapper>
                {messageData.map((message) => (
                    <S.MessageItem key={message.chatMessageId}>
                        {getMessageComponent(message)}
                    </S.MessageItem>
                ))}
                {imagePreview && (
                    <S.ImageWrapper>
                        <S.ImagePreview src={imagePreview} onClick={handleRemoveImage}/>
                    </S.ImageWrapper>
                )}
            </S.ChatMessageWrapper>

            <BC.HorizontalWrapper $ai={"center"} $jc={"space-between"} style={{width: "100%", boxShadow: "0 -1px 8px rgba(0, 0, 0, 0.1)", padding: "0 15px"}}>
                <input type="file" style={{display: "none"}} ref={fileRef} onChange={handleImageChange}/>
                <BC.Icon src={image} $w={"25px"} style={{cursor: "pointer", padding: "5px"}} title="이미지 첨부" onClick={() => fileRef.current.click()} />
                <BC.Icon src={type === "LINK" ? linkS : link} $w={"25px"} style={{cursor: "pointer", padding: "5px"}} title="눌러서 링크 모드 활성화"
                    onClick={() => setType(type === "LINK" ? "TEXT" : "LINK")}
                />
                <BC.Icon src={emoticon} $w={"25px"} style={{cursor: "pointer", padding: "5px"}} title="이모티콘" />
                <S.ChatInput value={currentMessage} onChange={(e) => {setCurrentMessage(e.target.value); setType("TEXT")}}/>
                <BC.Icon src={currentMessage.length > 0 ? send : sendd} $w={"25px"} title="전송하기" style={{cursor: "pointer", padding: "3px"}}
                    onClick={sendMessage}
                />
            </BC.HorizontalWrapper>
        </S.Wrapper>
    );
};

export default Chatpage;