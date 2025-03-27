import * as P from "@/apis/post";
import * as S from "./styles";
import { useParams } from "react-router-dom";
import { BOARD_DESCRIPTIONS } from "@/constants/boardsDesc";
import { useEffect, useState } from "react";

const NewBoard = () => {
    const {subPath} = useParams();
    const [form, setForm] = useState({
        page: 0
    });
    const [posts, setPosts] = useState([]);

    const boardInfo = BOARD_DESCRIPTIONS[subPath];

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await P.getAllPosts(form);
                setPosts(response.data.content);
                console.log(response.data.content)
            } catch(error) {
                
            }
        }

        fetchPosts;
    }, [form.page, subPath]);

    const handlePageChange = (newPage) => {
        setForm((prev) => ({
          ...prev,
          page: newPage-1,
        }));
    };

    return (
        <>
            <S.Wrapper>
                <S.Title>{boardInfo.label}</S.Title>
                <S.Description>{boardInfo.description}</S.Description>
                <S.TableHeader>

                </S.TableHeader>
                <S.Table>
                    <thead>
                        <S.Row>
                            <S.Field>게시판</S.Field>
                            <S.Field>제목</S.Field>
                            <S.Field>작성자</S.Field>
                            <S.Field>작성일</S.Field>
                            <S.Field>추천</S.Field>
                            <S.Field>조회</S.Field>
                        </S.Row>
                    </thead>
                    <tbody>
                        {posts.map((post) => (
                            <S.Row key={post.postId}>
                                <S.Column>{post.korean}</S.Column>
                                <S.Column>{post.title}</S.Column>
                                <S.Column>{post.nickname}</S.Column>
                                <S.Column>{post.createdAt}</S.Column>
                                <S.Column>{post.empathyCnt}</S.Column>
                                <S.Column>{post.viewCnt}</S.Column>
                            </S.Row>
                        ))}
                    </tbody>
                </S.Table>
            </S.Wrapper>
        </>
    )
}

export default NewBoard;