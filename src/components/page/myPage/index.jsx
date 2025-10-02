import * as S from "./styles";
import * as U from "@/apis/user";
import useUserInfo from "@/hooks/localStorage";
import Information from "../information";
import ParentGraph from "../parentGraph";
import { useEffect, useState } from "react";
import { SkeletonItem } from "@/common/component/Skeleton";

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
            <S.HorizontalWrapper $jc={"space-between"} $ai={"flex-start"}>
                {isLoading ? 
                    <SkeletonItem $width={"300px"} $height={"517px"} $radius={"25px"} /> : 
                    <Information isOwner={true} user={user} />
                }
                <ParentGraph userId={userInfo.userId} />
                
            </S.HorizontalWrapper>
        </S.Wrapper>
    )
};

export default MyPage;