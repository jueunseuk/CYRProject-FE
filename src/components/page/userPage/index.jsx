import * as S from "./styles";
import * as U from "@/apis/user";
import Information from "../information";
import useUserInfo from "@/hooks/localStorage";
import ParentGraph from "../parentGraph";
import refresh from "@/assets/icon/user/refresh.svg";
import ParentRecord from "../parentRecord";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const UserPage = () => {
    const navigate = useNavigate();
    const myUserId = useUserInfo().userId;
    const {userId} = useParams();
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (myUserId === Number(userId)) {
            navigate("/mypage");
        }
    }, [myUserId, userId, navigate]);

    const getUserProfileData = async () => {
        try {
            const otherId = userId;
            const response = await U.getOtherProfileData(otherId);
            setUser(response.data);
        } catch(error) {

        } finally {
            setIsLoading(false);
        }
    };
    
    useEffect(() => {
        getUserProfileData();
    }, [userId]);
    
    return (
        <S.Wrapper>
            <S.VerticalWrapper $gap={"30px"}
                style={{border: "1px solid #C6BC73",
                    borderRadius: "25px",
                    backgroundColor: "#fcf9e5ff",
                    padding: "30px"
                }}>
                <S.HorizontalWrapper $jc={"space-between"} $ai={"flex-start"} $gap={"41px"}>
                    <Information isOwner={false} user={user} />
                    <ParentRecord user={user} />
                </S.HorizontalWrapper>
            </S.VerticalWrapper>
            <ParentGraph userId={userId} />
        </S.Wrapper>
    )
};

export default UserPage;