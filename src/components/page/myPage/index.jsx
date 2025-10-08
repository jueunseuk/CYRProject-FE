import * as S from "./styles";
import * as U from "@/apis/user";
import useUserInfo from "@/hooks/localStorage";
import Information from "../information";
import ParentGraph from "../parentGraph";
import ParentRecord from "../parentRecord";
import refresh from "@/assets/icon/user/refresh.svg";
import { useEffect, useState } from "react";

const MyPage = () => {
    const userInfo = useUserInfo();
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    
    const getUserProfileData = async () => {
        try {
            const response = await U.getUserProfileData();
            setUser(response.data);
        } catch(error) {

        } finally {
            setIsLoading(false);
        }
    };
    
    useEffect(() => {
        getUserProfileData();
    }, []);

    return (
        <S.Wrapper>
            <S.VerticalWrapper $gap={"30px"}
                style={{border: "1px solid #C6BC73",
                    borderRadius: "25px",
                    backgroundColor: "#fcf9e5ff",
                    padding: "30px 30px 10px 30px"
                }}>
                <S.HorizontalWrapper $jc={"space-between"} $ai={"flex-start"} $gap={"41px"}>
                    <Information isOwner={true} user={user} />
                    <ParentRecord user={user} />
                </S.HorizontalWrapper>
                <S.HorizontalWrapper $gap={"5px"}>
                    <S.Icon src={refresh} ></S.Icon>
                    <S.Text $color={"#878787"} >
                        <S.LinkText>여기서</S.LinkText> 프로필을 강제로 갱신할 수 있습니다.
                    </S.Text>
                </S.HorizontalWrapper>
            </S.VerticalWrapper>
            <ParentGraph userId={userInfo.userId} />
        </S.Wrapper>
    )
};

export default MyPage;