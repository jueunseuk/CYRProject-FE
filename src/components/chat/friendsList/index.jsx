import * as S from "./styls";
import * as BC from "@/common/basic/BasicComponent";
import * as U from "@/apis/user";
import * as C from "@/apis/chat";
import message from "@/assets/icon/chat/message_plus.svg";
import search from "@/assets/icon/chat/search.svg";
import Chatpage from "../chatPage";
import { useEffect, useState } from "react";
import { UserProfileImage } from "@/common/func/UserProfile";
import useUserInfo from "@/hooks/localStorage";

const FriendList = () => {
    const user = useUserInfo();
    const [friendData, setFriendData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [openChatPageModal, setOpenChatPageModel] = useState(false);
    const [selectChatRoom, setSelectChatRoom] = useState({});
    const [searchText, setSearchText] = useState("");

    const fetchFriendList = async () => {
        try {
            const response = await U.getUserList();
            setFriendData(response.data);
            setFilteredData(response.data);
        } catch(error) {

        }
    };
    
    useEffect(() => {
        fetchFriendList();
    }, []);

    const handleSearch = (e) => {
        const value = e.target.value.toLowerCase();
        setSearchText(value);
        const filtered = friendData.filter((room) =>
            room.nickName.toLowerCase().includes(value)
        );
        setFilteredData(filtered);
    };

    const handleJoinChatRoom = async (friend) => {
        try {
            const form = {
                name: `${user.nickname}, ${friend.nickName}`,
                maxMember: 2,
                otherId: friend.userId
            };
            const response = await C.createChatRoom(form);
            
            if(response.data) {
                setSelectChatRoom(response.data);
                setOpenChatPageModel(true);
            }
        } catch(error) {

        }
    };

    return (
        <S.Wrapper>
            {openChatPageModal && <Chatpage chatRoom={selectChatRoom} onClose={() => setOpenChatPageModel(false)} />}
            <BC.HorizontalWrapper $gap={"15px"} style={{width: "100%"}}>
                <BC.Icon src={search}/>
                <BC.Input type="search" $w={"70%"} style={{padding: "5px", border: "none", borderBottom: "1px solid black", background: "linear-gradient(0deg, #F8F8F8, white 30%)"}}
                    placeholder="닉네임으로 검색.."
                    onChange={handleSearch}
                />
            </BC.HorizontalWrapper>
            <BC.Text $size={"12px"} style={{textAlign: "center", padding: "10px 0 0 0"}}>총 <BC.Text $weight={"600"} style={{display: "inline"}}>{filteredData.length}</BC.Text>개의 방</BC.Text>
            <BC.VerticalWrapper  style={{borderTop: "1px solid #ddd"}}>
                {filteredData.length === 0 ?
                    <BC.Text $size={"13px"} $color={"#878787"} style={{padding: "20px"}}>사용자가 없습니다..</BC.Text>
                :
                    filteredData.map((friend) => (
                        <S.UserItem key={friend.userId}>
                            <BC.HorizontalWrapper>
                                <UserProfileImage user={friend} width={"35px"} height={"35px"} radius={"35px"} />
                                <BC.HorizontalWrapper $gap={"7px"}>
                                    <BC.Text $color={"#878787"} $size={"12px"} style={{width: "60px", textAlign: "right"}}>{friend.role}</BC.Text>
                                    <BC.Text $size={"14px"} $weight={"600"} $color={friend.color}>{friend.nickName}</BC.Text>
                                </BC.HorizontalWrapper>
                            </BC.HorizontalWrapper>
                            <S.ChatPlusIcon src={message} title="개인 채팅 만들기" onClick={() => handleJoinChatRoom(friend)}/>
                        </S.UserItem>
                ))}
            </BC.VerticalWrapper>
        </S.Wrapper>
    );
};

export default FriendList;