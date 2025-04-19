import * as P from "@/apis/post";
import * as S from "./styles";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { BOARD_DESCRIPTIONS } from "@/constants/boardsDesc";
import useUserInfo from "@/hooks/localStorage";
import MoreOption from "@/components/modal/moreOption";
import author from "@/assets/icon/post/author.svg";
import empathy from "@/assets/icon/post/empathy.svg";
import view from "@/assets/icon/post/view.svg";
import comment from "@/assets/icon/post/comment.svg";
import ellipse from "@/assets/icon/post/ellipse.svg";
import list from "@/assets/icon/gallery/list.svg";
import { formatDate } from "@/util/dateFormatter";
import { PostContent } from "../postContent";
import { SkeletonItem } from "@/common/component/Skeleton";

const BasicPost = () => {
    const user = useUserInfo();
    const {subPath} = useParams();
    const boardInfo = BOARD_DESCRIPTIONS[subPath];
    const {postId} = useParams();
    const navigate = useNavigate();
    const [skeleton, setSkeleton] = useState(true);
    const [postData, setPostData] = useState({});

    const handleNavigatePostList = () => {
        navigate(`/${subPath}`);
    }

    useEffect(() => {
        const fetchPost = async () => {
            try {
                setSkeleton(true);
                const response = await P.getPost(postId);
                setPostData(response.data);
            } catch(error) {

            } finally {
                setSkeleton(false);
            }
        }

        fetchPost();
    }, []);

    return (
        <>
            <S.Wrapper>
                {skeleton ? 
                    <S.VerticalWrapper $gap={"15px"}>
                        <SkeletonItem $size={"1200px"} $width={"100%"} $height={"83px"}/>
                        <S.Contour style={{marginTop: "0"}}/>
                        <SkeletonItem $size={"1200px"} $width={"100%"} $height={"300px"}/>
                    </S.VerticalWrapper>
                    : (
                    <>
                        <S.VerticalWrapper>
                            <S.Text $size={"14px"} style={{cursor: "pointer"}}>{boardInfo.label} &gt;</S.Text>
                            <S.HorizontalWrapper $justify={"space-between"} style={{width: "100%"}}>
                                <S.Text $size={"18px"} $weight={"700"} style={{marginTop: "1px"}}>{postData.title}</S.Text>
                                <MoreOption formData={postData} />
                            </S.HorizontalWrapper>
                            <S.HorizontalWrapper $gap={"12px"} style={{marginTop: "10px"}}>
                                <S.Profile src={postData.profileImageUrl}/>
                                <S.HorizontalWrapper>
                                    <S.Icon src={author} $width={"10px"} $height={"10px"}/>
                                    <S.Text $size={"14px"} $weight={"600"} style={{cursor: "pointer"}}>{postData.userNickname}</S.Text>
                                </S.HorizontalWrapper>
                                <S.HorizontalWrapper>
                                    <S.Icon src={empathy} $width={"10px"} $height={"10px"}/>
                                    <S.Text $size={"12px"}>{postData.empathyCnt}</S.Text>
                                </S.HorizontalWrapper>
                                <S.HorizontalWrapper>
                                    <S.Icon src={view} $width={"10px"} $height={"10px"}/>
                                    <S.Text $size={"12px"} $color={"#878787"} $weight={"600"}>{postData.viewCnt}</S.Text>
                                </S.HorizontalWrapper>
                                <S.HorizontalWrapper>
                                    <S.Icon src={comment} $width={"10px"} $height={"10px"}/>
                                    <S.Text $size={"12px"} $color={"#878787"} $weight={"600"}>{postData.commentCnt}</S.Text>
                                </S.HorizontalWrapper>
                                <S.Icon src={ellipse} $width={"3px"} $height={"3px"}/>
                                <S.Text $size={"12px"} $color={"#878787"}>{formatDate(postData.createdAt, 4)}</S.Text>
                            </S.HorizontalWrapper>
                        </S.VerticalWrapper>
                        <S.Contour />
                        <S.VerticalWrapper>
                        <S.Content>
                            <PostContent content={postData.content}/>
                        </S.Content>
                        </S.VerticalWrapper>
                        <S.NaviagateButton onClick={handleNavigatePostList}><S.Icon src={list} $width={"13px"} $height={"10px"}/>목록</S.NaviagateButton>
                    </>
                )}
            </S.Wrapper>
        </>
    );
}

export default BasicPost;