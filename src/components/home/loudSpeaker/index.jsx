import * as EP from "@/apis/exposurePost";
import * as S from "./styles";
import * as BC from "@/common/basic/BasicComponent";
import loudspeaker from "@/assets/icon/post/loudspeaker.svg";
import information from "@/assets/icon/etc/information.svg";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { formatDate } from "@/util/dateFormatter";
import { SkeletonItem } from "@/common/skeleton/Skeleton";

const LoudSpeakerPost = () => {
    const page = 0;
    const sort = "createdAt";
    const [posts, setPosts] = useState([]);
    const [skeleton, setSkeleton] = useState(true);
    const navigate = useNavigate();

    const handleNavigatePost = (boardName, id, boardId) => {
        navigate(`/${boardName}/${id}`, {
            state: {
                page, sort, boardId, boardName
            }
        });
    };

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                setSkeleton(true);
                const response = await EP.getExposedPosts();
                setPosts(response.data);

            } catch(error) {
                
            } finally {
                setSkeleton(false);
            }
        }
        fetchPosts();
    }, []);

    return (
        <>
            {posts?.length > 0 && <S.Wrapper>
                <S.TitleArea>
                    <BC.Icon src={loudspeaker} $w={"15px"} />
                    <S.Text $size={"16px"} $weight={"600"}>스포트라이트</S.Text>
                    <S.TooltipWrapper>%
                        <BC.Icon src={information} />
                        <S.TooltipText>
                            <p style={{fontSize: "16px", fontWeight:"700", marginBottom:"5px"}}>스포트라이트란?</p>
                            <p style={{fontSize:"14px"}}>사용자가 확성기 아이템을 사용해</p>
                            <p style={{fontSize:"14px"}}>메인 페이지에 노출한 게시글입니다.</p>
                            <p style={{fontSize:"14px"}}>노출은 사용 시점부터 24시간 유지됩니다.</p>
                        </S.TooltipText>
                    </S.TooltipWrapper>
                </S.TitleArea>
                    <S.Table>
                        <colgroup>
                            <col style={{ width: "15%" }} />
                            <col style={{ width: "51%" }} />
                            <col style={{ width: "12%" }} />
                            <col style={{ width: "12%" }} />
                            <col style={{ width: "10%" }} />
                        </colgroup>
                        <tbody>
                            {skeleton ?
                                Array.from({ length: 5 }).map((_, index) => (
                                    <S.Row key={index}>
                                        <S.FirstColumn><SkeletonItem $width="100%" $height="15px" $radius={"5px"} /></S.FirstColumn>
                                        <S.Column><SkeletonItem $width="100%" $height="15px" $radius={"5px"} /></S.Column>
                                        <S.Column><SkeletonItem $width="100%" $height="15px" $radius={"5px"} /></S.Column>
                                        <S.Column><SkeletonItem $width="100%" $height="15px" $radius={"5px"} /></S.Column>
                                        <S.Column><SkeletonItem $width="100%" $height="15px" $radius={"5px"} /></S.Column>
                                    </S.Row>
                                ))
                                : posts.slice(0, 15).map((post) => (
                                <S.Row key={post.postId}>
                                    <S.FirstColumn><S.Text onClick={() => navigate(`/${post.boardName}`)} style={{cursor: "pointer"}}>[{post.boardKorean}]</S.Text></S.FirstColumn>
                                    <S.Column $align={"left"} onClick={() => handleNavigatePost(post.boardName, post.postId, post.boardId)}><S.Text style={{cursor: "pointer"}}>{post.title}{post.commentCnt > 0 ? (<S.Comment>{post.commentCnt}</S.Comment>) : ""}</S.Text></S.Column>
                                    <S.Column $align={"left"}><S.Text onClick={() => navigate(`/users/${post.userId}`)} style={{cursor: "pointer"}}>{post.userNickname}</S.Text></S.Column>
                                    <S.Column><S.Text $color={"#878787"}>{formatDate(post.createdAt, 3)}</S.Text></S.Column>
                                    <S.Column><S.Text $color={"#878787"}>{post.viewCnt}</S.Text></S.Column>
                                </S.Row>
                            ))}
                        </tbody>
                    </S.Table>
            </S.Wrapper>}
        </>
    )
}

export default LoudSpeakerPost;