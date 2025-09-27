import * as P from "@/apis/post";
import * as C from "@/apis/comment"
import * as S from "./styles";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { BOARD_DESCRIPTIONS } from "@/constants/boardsDesc";
import useUserInfo from "@/hooks/localStorage";
import MoreOption from "@/components/modal/moreOption";
import author from "@/assets/icon/post/author.svg";
import empathy from "@/assets/icon/post/empathy.svg";
import view from "@/assets/icon/post/view.svg";
import comments from "@/assets/icon/post/comment.svg";
import ellipse from "@/assets/icon/post/ellipse.svg";
import list from "@/assets/icon/gallery/list.svg";
import { formatDate } from "@/util/dateFormatter";
import { PostContent } from "../postContent";
import { SkeletonItem } from "@/common/component/Skeleton";

const BasicPost = () => {
    const user = useUserInfo();
    const navigate = useNavigate();
    const {subPath} = useParams();
    const boardInfo = BOARD_DESCRIPTIONS[subPath];
    const {postId} = useParams();
    const [skeleton, setSkeleton] = useState(true);
    const [postData, setPostData] = useState({});
    const [comment, setComment] = useState("");
    const [locked, setLocked] = useState("PUBLIC");
    const [commentData, setCommentData] = useState([]);

    const handleNavigatePostList = () => {
        navigate(`/${subPath}`);
    }

    useEffect(() => {
        const fetchPost = async () => {
            try {
                setSkeleton(true);
                const response = await P.getPost(postId);
                setPostData(response.data);
                const commentRes = await C.getPostCommentList(postId);
                setCommentData(commentRes);
                console.log(commentRes)
            } catch(error) {

            } finally {
                setSkeleton(false);
            }
        }

        fetchPost();
    }, []);

    const handleClickComment = async () => {
        if(!comment || comment.trim() === "") {
            alert("내용을 입력해주세요!");
            return;
        }

        if(comment.length < 5) {
            alert("댓글 길이가 너무 짧습니다!\n5자 이상으로 작성해주세요.")
        }

        try {
            await C.postComment({postId, comment, locked});
            const commentRes = await C.getPostCommentList(postId);
            setCommentData(commentRes);
            setComment("");
        } catch(error) {

        }
    }

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
                            <S.Text $size={"14px"} style={{cursor: "pointer"}} onClick={handleNavigatePostList}>{boardInfo.label} &gt;</S.Text>
                            <S.HorizontalWrapper $justify={"space-between"} style={{width: "100%"}}>
                                <S.Text $size={"18px"} $weight={"700"} style={{marginTop: "1px"}}>{postData.title}</S.Text>
                                <MoreOption formData={postData} type={boardInfo.label}/>
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
                                    <S.Icon src={comments} $width={"10px"} $height={"10px"}/>
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
                        <S.NavigateButton onClick={handleNavigatePostList}><S.Icon src={list} $width={"13px"} $height={"10px"}/>목록</S.NavigateButton>
                    </>
                )}
            </S.Wrapper>

            <S.CommentWrapper>
                <S.Text $size={"17px"} $weight={"700"} style={{textAlign: "left", paddingLeft: "15px", marginBottom: "10px", marginTop: "10px"}}>댓글 ({commentData.length})</S.Text>
                <S.CommentInputArea>
                    <S.HorizontalWrapper style={{marginBottom: "5px"}}>
                        <S.InputField value={comment} onChange={(e) => setComment(e.target.value)}/>
                        <S.CommentButton onClick={handleClickComment} disabled={comment.length < 5 || user.role === "GUEST"}>등록</S.CommentButton>
                    </S.HorizontalWrapper>
                    <S.Text $color={"#878787"} $size={"11px"}>댓글을 작성할 때는 커뮤니티 이용가이드의 댓글 작성 가이드라인을 참고해주세요.</S.Text>
                </S.CommentInputArea>
                <S.CommentList>
                    {commentData?.length > 0 ? (
                        commentData.map((c) => (
                        <S.CommentItem key={c.commentId}>
                            <S.HorizontalWrapper $gap={"15px"} style={{width: "100%", alignItems: "flex-start"}}>
                                <S.Profile src={c.profileUrl} style={{height: "50px", width: "50px", borderRadius: "50px"}}/>
                                <S.VerticalWrapper style={{height: "50%", justifyContent: "flex-start", gap: "10px"}}>
                                    <S.HorizontalWrapper>
                                        {c.userId === postData.userId && <S.Icon src={author}/>}
                                        <S.Text $size="14px" $weight="600">{c.userName}</S.Text>
                                        <S.Text $size="12px" $color="#878787">{formatDate(c.createdAt, 3)}</S.Text>
                                    </S.HorizontalWrapper>
                                    <S.Text style={{textAlign: "left"}}>{c.content}</S.Text>
                                </S.VerticalWrapper>
                            </S.HorizontalWrapper>
                        </S.CommentItem>
                        ))
                    ) : (
                        <S.Text $size="14px" $color="#878787">
                            아직 댓글이 없습니다...
                        </S.Text>
                    )}
                </S.CommentList>
            </S.CommentWrapper>
        </>
    );
}

export default BasicPost;