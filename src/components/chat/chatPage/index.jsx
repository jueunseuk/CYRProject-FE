import * as S from "./styles";
import * as BC from "@/common/basic/BasicComponent";
import * as C from "@/apis/chat";
import * as U from "@/apis/user";
import * as I from "@/apis/image";
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
import EmoticonMessage from "./emoticon";
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
    const [size, setSize] = useState(20);
    const sort = "createdAt";
    const direction = "DESC";
    const [emoticonData, setEmoticonData] = useState([]);
    const [selectEmoticon, setSelectEmoticon] = useState(null);

    const clientRef = useRef(null);
    const connectedRef = useRef(false);

    useEffect(() => {
        const socket = new SockJS(`${backendUrl}/ws/stomp`);
        const stompClient = new Client({
            webSocketFactory: () => socket,
            reconnectDelay: 5000,
            debug: (str) => console.log(str),
        });

        stompClient.onConnect = () => {
            console.log("✅ STOMP 연결 성공");
            connectedRef.current = true;

            stompClient.subscribe(`/topic/chatroom.${chatRoom.chatRoomId}`, (message) => {
                const body = JSON.parse(message.body);
            });
        };

        stompClient.onDisconnect = () => {
            connectedRef.current = false;
            console.log("❌ STOMP 연결 종료");
        };

        stompClient.activate();
        clientRef.current = stompClient;

        return () => {
            if (stompClient.active) stompClient.deactivate();
        };
    }, []);

    const sendImage = async () => {
        if(!file || !imagePreview) {
            alert("전송할 이미지가 없습니다.");
            return;
        }

        try {
            const appendMessage = {
                "type": type,
                "content": imagePreview,
                "userId": user.userId
            };
            setMessageData((prev) => [appendMessage, ...prev]);
            setImagePreview("");

            const form = new FormData();
            form.append("image", file);
            const response = await I.uploadImage(form);

            return response.data;
        } catch (error) {
            return null;
        }
    };

    const sendMessage = async () => {
        const client = clientRef.current;
        if (!client || !connectedRef.current || (currentMessage.trim().length <= 0 && !file && !selectEmoticon)) return;

        let deltaContent = currentMessage;
        if(type === "IMAGE") {
            const imageUrl = await sendImage();
            if(!imageUrl) return;
            deltaContent = imageUrl;
        } else if(type === "EMOTICON") {
            deltaContent = selectEmoticon;
        } else if(type === "TEXT") {
            const appendMessage = {
            "type": "TEXT",
            "content": currentMessage,
            "userId": user.userId,
            "createdAt": `${new Date().toISOString()}`
            };
            setMessageData((prev) => [appendMessage, ...prev]);
        }

        const message = {
            "userId": user.userId,
            "content": deltaContent,
            "type": type
        };

        client.publish({
            destination: `/app/chat.send.${chatRoom.chatRoomId}`,
            body: JSON.stringify(message),
        });

        setSelectEmoticon(null);
        setFile(null);
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

    const fetchUserEmticon = async () => {
        try {
            const response = await U.getUserEmoticon();
            setEmoticonData(response.data);
        } catch(error) {

        }
    };

    useEffect(() => {
        fetchChatMessage();
        fetchUserEmticon();
    }, []);

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
        setType("TEXT")
    };

    const handleClickEmoticon = (emoticon) => {
        setSelectEmoticon(emoticon.imageUrl);
        setType("EMOTICON");

        const appendMessage = {
            "type": "EMOTICON",
            "content": emoticon.imageUrl,
            "userId": user.userId,
            "createdAt": `${new Date().toISOString()}`
        };
        setMessageData((prev) => [appendMessage, ...prev]);

        sendMessage();

        setType("TEXT");
        setImagePreview("");
    };

    const handleClickExitChatRoom = async () => {
        try {
            await C.exitChatRoom(chatRoom.chatRoomId);
            onClose();
        } catch(error) {

        }
    };

    const getMessageComponent = (message) => {
        switch (message.type) {
            case "SYSTEM":
                return <SystemMessage message={message} />;
            case "IMAGE":
                return <ImageMessage message={message} isMine={user.userId === message.userId} />;
            case "EMOTICON":
                return <EmoticonMessage message={message} isMine={user.userId === message.userId} />;
            case "LINK":
                return <LinkMessage message={message} isMine={user.userId === message.userId}/>
            default:
                return <TextMessage message={message} isMine={user.userId === message.userId} />;
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            sendMessage();
        }
    };

    return (
        <S.Wrapper>
            <BC.VerticalWrapper>
                <BC.HorizontalWrapper $jc={"space-between"} $ai={"center"} style={{width: "100%", padding: "10px", borderBottom: "1px solid #ddd"}}>
                    <S.TopIcon src={back} onClick={onClose} />
                    <BC.HorizontalWrapper $gap={"5px"}>
                        <BC.Text $size={"18px"} $weight={"700"}>{chatRoom.name}</BC.Text>
                        <BC.Text $size={"13px"} $weight={"500"}>({chatRoom.totalMember})</BC.Text>
                    </BC.HorizontalWrapper>
                    <S.TopIcon src={exit} title="그룹에서 나가기" onClick={handleClickExitChatRoom}/>
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
                {type === "EMOTICON" && (
                    <S.EmoticonWrapper>
                        {emoticonData.map((emoticon) => (
                            <S.EmoticonItem key={emoticon.shopItemId} src={emoticon.imageUrl} onClick={() => handleClickEmoticon(emoticon)} title={emoticon.name}/>
                        ))}
                    </S.EmoticonWrapper>
                )}
            </S.ChatMessageWrapper>

            <BC.HorizontalWrapper $ai={"center"} $jc={"space-between"} style={{width: "100%", boxShadow: "0 -1px 8px rgba(0, 0, 0, 0.1)", padding: "0 15px"}}>
                <input type="file" style={{display: "none"}} ref={fileRef} onChange={handleImageChange}/>
                <BC.Icon src={image} $w={"25px"} style={{cursor: "pointer", padding: "5px"}} title="이미지 첨부" onClick={() => fileRef.current.click()} />
                <BC.Icon src={type === "LINK" ? linkS : link} $w={"25px"} style={{cursor: "pointer", padding: "5px"}} title="눌러서 링크 모드 활성화"
                    onClick={() => setType(type === "LINK" ? "TEXT" : "LINK")}
                />
                <BC.Icon src={emoticon} $w={"25px"} style={{cursor: "pointer", padding: "5px"}} title="이모티콘"
                    onClick={() => {setType(type === "EMOTICON" ? "TEXT" : "EMOTICON")}}
                />
                <S.ChatInput value={currentMessage} onChange={(e) => {setCurrentMessage(e.target.value); setType("TEXT")}} onKeyDown={handleKeyDown}/>
                <BC.Icon src={currentMessage.length > 0 || file ? send : sendd} $w={"25px"} title="전송하기" style={{cursor: "pointer", padding: "3px"}}
                    onClick={sendMessage}
                />
            </BC.HorizontalWrapper>
        </S.Wrapper>
    );
};

export default Chatpage;