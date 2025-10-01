import * as S from "./styles";
import * as U from "@/apis/user";
import Information from "../information";
import { useEffect, useState } from "react";
import { SkeletonItem } from "@/common/component/Skeleton";
import ParentGraph from "../parentGraph";

const MyPage = () => {
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
                <ParentGraph isOwner={true} />
                
            </S.HorizontalWrapper>
        </S.Wrapper>
    )
};

export default MyPage;