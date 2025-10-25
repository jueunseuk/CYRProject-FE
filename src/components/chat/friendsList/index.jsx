import * as S from "./styls";
import * as BC from "@/common/basic/BasicComponent";
import * as U from "@/apis/user";
import { useEffect, useState } from "react";
import { UserProfileImage } from "@/common/func/UserProfile";

const FriendList = () => {
    const [friendData, setFriendData] = useState([]);

    const fetchFriendList = async () => {
        try {
            const response = await U.getUserList();
            setFriendData(response.data);
        } catch(error) {

        }
    };
    
    useEffect(() => {
        fetchFriendList();
    }, []);

    return (
        <S.Wrapper>
            <BC.HorizontalWrapper>
                검색바랑 총 몇명인지 출력하기
            </BC.HorizontalWrapper>
            {friendData.map((friend) => (
                <S.UserItem key={friend.userId}>
                    <BC.HorizontalWrapper>
                        <UserProfileImage user={friend} width={"30px"} height={"30px"} />
                        <BC.HorizontalWrapper $gap={"7px"}>
                            <BC.Text $color={"#878787"} $size={"12px"} style={{width: "60px", textAlign: "right"}}>{friend.role}</BC.Text>
                            <BC.Text $size={"14px"} $weight={"600"}>{friend.nickName}</BC.Text>
                        </BC.HorizontalWrapper>
                    </BC.HorizontalWrapper>
                    <BC.Text className="hover" $size={"18px"} $weight={"600"}>&gt;</BC.Text>
                </S.UserItem>
            ))}
        </S.Wrapper>
    );
};

export default FriendList;