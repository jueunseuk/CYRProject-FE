import * as S from "./styles";
import * as U from "@/apis/user";
import Information from "../information";
import useUserInfo from "@/hooks/localStorage";
import ParentGraph from "../parentGraph";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { SkeletonItem } from "@/common/component/Skeleton";

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
    }, []);
    
    return (
        <S.Wrapper>
            <S.HorizontalWrapper $jc={"space-between"} $ai={"flex-start"}>
                {isLoading ? 
                    <SkeletonItem $width={"300px"} $height={"517px"} $radius={"25px"} /> : 
                    <Information isOwner={false} user={user} />
                }

            </S.HorizontalWrapper>
            <ParentGraph userId={userId} />
        </S.Wrapper>
    )
};

export default UserPage;