import * as P from "@/apis/post";
import * as S from "./styles";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { formatDate } from "@/util/dateFormatter";

const AnnouncementSummary = () => {
    const page = 0;
    const sort = "createdAt";
    const boardId = 5;
    const [posts, setPosts] = useState([]);
    const navigate = useNavigate();

    const handleNavigatePost = (pageNum) => {

    }

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await P.getBoardPosts({page, sort, boardId});
                setPosts(response.data.content);
            } catch(error) {
                
            }
        }
        fetchPosts();
    }, []);

    return (
        <>
            <S.Wrapper>
                <S.TitleArea>
                    <S.Text $size={"16px"} $weight={"600"}>공지사항</S.Text>
                    <S.Text $size={"12px"} style={{cursor: "pointer"}}>더보기</S.Text>
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
                        {posts &&
                            <S.FirstRow key={posts[0]?.postId}>
                                <S.FirstColumn><S.Text>{posts.length > 0 ? `[${posts[0].boardKorean}]` : ""}</S.Text></S.FirstColumn>
                                <S.Column $align={"left"}><S.Text>{posts[0]?.title}</S.Text></S.Column>
                                <S.Column $align={"left"}><S.Text>{posts[0]?.userNickname}</S.Text></S.Column>
                                <S.Column><S.Text $color={"#878787"}>{formatDate(posts[0]?.createdAt, 3)}</S.Text></S.Column>
                                <S.Column><S.Text $color={"#878787"}>{posts[0]?.viewCnt}</S.Text></S.Column>
                            </S.FirstRow>
                        }
                        {posts.slice(1, 15).map((post) => (
                            <S.Row key={post.postId}>
                                <S.FirstColumn><S.Text>[{post.boardKorean}]</S.Text></S.FirstColumn>
                                <S.Column $align={"left"}><S.Text>{post.title}</S.Text></S.Column>
                                <S.Column $align={"left"}><S.Text>{post.userNickname}</S.Text></S.Column>
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