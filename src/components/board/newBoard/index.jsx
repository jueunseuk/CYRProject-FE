import * as P from "@/apis/post";
import * as S from "./styles";
import { useNavigate, useParams } from "react-router-dom";
import { BOARD_DESCRIPTIONS } from "@/constants/boardsDesc";
import { useEffect, useState } from "react";
import { formatDate } from "@/util/dateFormatter";
import { getEmpathyColor } from "@/util/empathySelector";

const NewBoard = () => {
    const {subPath} = useParams();
    const [page, setPage] = useState(0);
    const [sort, setSort] = useState("createdAt");
    const [totalPage, setTotalPage] = useState(0);
    const [totalElements, setTotalElements] = useState(0);
    const [posts, setPosts] = useState([]);
    const navigate = useNavigate();

    const boardInfo = BOARD_DESCRIPTIONS[subPath];

    const handleClickSort = (value) => {
        setSort(value);
    }

    const handleClickPage = (pageNum) => {
        setPage(pageNum-1);
    }

    const handleNavigatePost = (pageNum) => {

    }

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await P.getAllPosts({page, sort});
                setPosts(response.data.content);
                setTotalElements(response.data.totalElements);
                setTotalPage(response.data.totalPages);
            } catch(error) {
                
            }
        }
        fetchPosts();
    }, [page, sort, subPath]);

    const getPageComponent = () => {
        const pages = Array.from({length: totalPage}, (_, i) => i+1);

        return (
            <>
                {pages.map((pageNum) => (
                        <S.PageButton $weight={page === pageNum-1 ? "700" : "400"} $border={page === pageNum-1 ? "1px" : "0px"} key={pageNum} onClick={() => handleClickPage(pageNum)}>
                            {pageNum}
                        </S.PageButton>
                ))}
            </>
        )
    };

    return (
        <>
            <S.Wrapper>
                <S.Title>{boardInfo.label}</S.Title>
                <S.Description>{boardInfo.description}</S.Description>
                <S.TableHeader>
                    <S.TextArea>
                        <S.Text $size={"11px"} $weight={"700"}>{totalElements}</S.Text>
                        <S.Text $size={"11px"}>개의 글</S.Text>
                    </S.TextArea>
                    <S.SortArea>
                        <S.Sort onClick={() => handleClickSort("createdAt")} $weight={sort === "createdAt" ? 700 : ""}>최신순</S.Sort>
                        <S.Text $size={"11px"}>|</S.Text>
                        <S.Sort onClick={() => handleClickSort("empathyCnt")} $weight={sort === "empathyCnt" ? 700 : ""}>추천순</S.Sort>
                        <S.Text $size={"11px"}>|</S.Text>
                        <S.Sort onClick={() => handleClickSort("viewCnt")} $weight={sort === "viewCnt" ? 700 : ""}>조회순</S.Sort>
                    </S.SortArea>
                </S.TableHeader>
                <S.Table>
                        <colgroup>
                            <col style={{ width: "150px" }} />
                            <col style={{ width: "370px" }} />
                            <col style={{ width: "80px" }} />
                            <col style={{ width: "80px" }} />
                            <col style={{ width: "80px" }} />
                            <col style={{ width: "63px" }} />
                        </colgroup>
                    <thead>
                        <S.FirstRow>
                            <S.Field>게시판</S.Field>
                            <S.Field>제목</S.Field>
                            <S.Field $align={"left"}>작성자</S.Field>
                            <S.Field>작성일</S.Field>
                            <S.Field>조회</S.Field>
                            <S.Field>추천</S.Field>
                        </S.FirstRow>
                    </thead>
                    <tbody>
                        {posts.map((post) => (
                            <S.Row key={post.postId}>
                                <S.Column>{post.boardKorean}</S.Column>
                                <S.Column $align={"left"} onClick={() => handleNavigatePost(key)}>{post.title}{post.commentCnt > 0 ? (<S.Comment>{post.commentCnt}</S.Comment>) : ""}</S.Column>
                                <S.Column $align={"left"} $size={"12px"}>{post.userNickname}</S.Column>
                                <S.Column $color={"#878787"} $size={"12px"}>{formatDate(post.createdAt, 3)}</S.Column>
                                <S.Column $color={"#878787"} $size={"12px"}>{post.viewCnt}</S.Column>
                                <S.Column $color={getEmpathyColor(post.empathyCnt)}>{post.empathyCnt}</S.Column>
                            </S.Row>
                        ))}
                    </tbody>
                </S.Table>
                <S.PaginationArea>
                    {getPageComponent()}
                </S.PaginationArea>
            </S.Wrapper>
        </>
    )
}

export default NewBoard;