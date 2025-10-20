import * as P from "@/apis/post";
import * as S from "./styles";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { formatDate } from "@/util/dateFormatter";
import { SkeletonItem } from "@/common/component/Skeleton";

const AnnouncementSummary = () => {
    const page = 0;
    const sort = "createdAt";
    const boardId = 5;
    const [posts, setPosts] = useState([]);
    const [skeleton, setSkeleton] = useState(true);
    const navigate = useNavigate();

    const handleNavigatePost = (id) => {
        navigate(`/announcement/${id}`);
    }

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                setSkeleton(true);
                const response = await P.getBoardPosts({page, sort, boardId});
                setPosts(response.data.content);
            } catch(error) {
                
            } finally {
                setSkeleton(false);
            }
        }
        fetchPosts();
    }, []);

    return (
        <>
            <S.Wrapper>
                <S.TitleArea>
                    <S.Text $size={"16px"} $weight={"600"}>공지사항</S.Text>
                    <S.Text $size={"12px"} style={{cursor: "pointer"}} onClick={() => navigate("/announcement")}>더보기</S.Text>
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
                            : posts.slice(0, 5).map((post) => (
                                <S.Row key={post.postId}>
                                    <S.FirstColumn><S.Text onClick={() => navigate(`/${post.boardName}`)} style={{cursor: "pointer"}}>[{post.boardKorean}]</S.Text></S.FirstColumn>
                                    <S.Column $align={"left"} onClick={() => handleNavigatePost(post.postId)}><S.Text style={{cursor: "pointer"}}>{post.title}</S.Text></S.Column>
                                    <S.Column $align={"left"}><S.Text onClick={() => navigate(`/users/${post.userId}`)} style={{cursor: "pointer"}}>{post.userNickname}</S.Text></S.Column>
                                    <S.Column><S.Text $color={"#878787"}>{formatDate(post.createdAt, 3)}</S.Text></S.Column>
                                    <S.Column><S.Text $color={"#878787"}>{post.viewCnt}</S.Text></S.Column>
                                </S.Row>
                        ))}
                    </tbody>
                </S.Table>
            </S.Wrapper>
        </>
    );
}

export default AnnouncementSummary;