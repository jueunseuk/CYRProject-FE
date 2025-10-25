import * as S from "./styls";
import * as BC from "@/common/basic/BasicComponent";
import * as C from "@/apis/chat";
import { useEffect, useState } from "react";

const MessageListSearch = () => {
    const [chatRoomData, setChatRoomData] = useState([]);

    const fetchMessageList = async () => {
        try {
            const response = await C.getChatRoomList();
            setChatRoomData(response.data);
        } catch(error) {

        }
    };

    useEffect(() => {
        fetchMessageList();
    }, []);
    
    return (
        <S.Wrapper>
            열린 채팅방들 둘러보기
        </S.Wrapper>
    );
};

export default MessageListSearch;