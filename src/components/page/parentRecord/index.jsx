import * as S from "./styles";
import * as U from "@/apis/user";
import images from "@/assets/icon/user/images.svg";
import likePosts from "@/assets/icon/user/likePosts.svg";
import posts from "@/assets/icon/user/posts.svg";
import comments from "@/assets/icon/user/comments.svg";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useUserInfo from "@/hooks/localStorage";

const ParentRecord = ({user}) => {
    const localUser = useUserInfo();
    const navigate = useNavigate();
    const [activityData, setActivityData] = useState({});

    const handleNavigateActivity = (type) => {
        if(localUser.userId === user.userId) {
            navigate(`/mypage/${type}`);
        } else {
            navigate(`/users/${user.userId}/${type}`);
        }
    };

    useEffect(() => {
        if (!user?.userId) return;

        const fetchUserActivityData = async () => {
            try {
                const response = await U.getUserActivityData(user.userId);
                setActivityData(response.data);
            } catch(error) {

            }
        }

        fetchUserActivityData();
    }, [user]);

    return (
        <S.Wrapper>
            <S.Text $size={"18px"} $weight={"700"}>활동</S.Text>
            <S.ItemList>
                <S.ItemBox onClick={() => handleNavigateActivity("posts")}>
                    <S.VerticalWrapper $gap={"8px"} style={{width: "100px"}}>
                        <S.Icon src={posts} />
                        <S.Text $size={"13px"} $weight={"500"} $color={"#878787"} >작성한 글</S.Text>
                    </S.VerticalWrapper>
                    <S.DataText>{activityData.postCnt}</S.DataText>
                </S.ItemBox>
                <S.ItemBox onClick={() => handleNavigateActivity("comments")}>
                    <S.VerticalWrapper $gap={"8px"} style={{width: "100px"}}>
                        <S.Icon src={comments} />
                        <S.Text $size={"13px"} $weight={"500"} $color={"#878787"} >작성한 댓글</S.Text>
                    </S.VerticalWrapper>
                    <S.DataText>{activityData?.commentCnt}</S.DataText>
                </S.ItemBox>
                <S.ItemBox onClick={() => handleNavigateActivity("empathized")}>
                    <S.VerticalWrapper $gap={"8px"} style={{width: "100px"}}>
                        <S.Icon src={likePosts} />
                        <S.Text $size={"13px"} $weight={"500"} $color={"#878787"} >공감한 글</S.Text>
                    </S.VerticalWrapper>
                    <S.DataText>{activityData.empathyCnt}</S.DataText>
                </S.ItemBox>
                <S.ItemBox onClick={() => handleNavigateActivity("images")}>
                    <S.VerticalWrapper $gap={"8px"} style={{width: "100px"}}>
                        <S.Icon src={images} />
                        <S.Text $size={"13px"} $weight={"500"} $color={"#878787"} >업로드한 사진</S.Text>
                    </S.VerticalWrapper>
                    <S.DataText>{activityData.imageCnt}</S.DataText>
                </S.ItemBox>
            </S.ItemList>
        </S.Wrapper>
    );
};

export default ParentRecord;