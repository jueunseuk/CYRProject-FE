import * as S from "./styles";
import * as U from "@/apis/user";
import desc from "@/assets/icon/etc/descending.svg";
import useUserInfo from "@/hooks/localStorage";
import { formatDate } from "@/util/dateFormatter";
import { getEmpathyColor } from "@/util/empathySelector";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const MyEmpathizedPosts = () => {
    const user = useUserInfo();
    const [size, setSize] = useState(30);
    const [sort, setSort] = useState("createdAt");
    const [direction, setDirection] = useState("DESC");
    const [totalPage, setTotalPage] = useState(0);
    const [totalElements, setTotalElements] = useState(0);
    const [posts, setPosts] = useState([]);
    const navigate = useNavigate();

    const [searchParams, setSearchParams] = useSearchParams();
    const page = Number(searchParams.get("page")) || 1;

    const handleClickSort = (value) => {
        setSort(value);
    };

    const handleClickPage = (pageNum) => {
        setSearchParams({ page: pageNum });
    };

    const handleClickDirection = () => {
        setDirection(direction === "DESC" ? "ASC" : "DESC");
    };

    const handleNavigateBoard = (boardName) => {
        navigate(`/${boardName}`);
    };

    const handleNavigatePost = (boardName, postId) => {
        navigate(`/${boardName}/${postId}`);
    };

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await U.getUserEmpathyPosts(user.userId, {page: page > 0 ? page - 1 : 0, sort, size, direction});
                setPosts(response.data.content);
                setTotalElements(response.data.totalElements);
                setTotalPage(response.data.totalPages);
            } catch(error) {
                
            }
        }

        fetchPosts();
    }, [searchParams, size, sort, direction]);

    const getPageComponent = () => {
        const pages = Array.from({length: totalPage}, (_, i) => i+1);

        return (
            <>
                {pages.map((pageNum) => (
                    <S.PageButton $weight={page === pageNum ? "700" : "400"} $border={page === pageNum ? "1px" : "0px"} key={pageNum} onClick={() => handleClickPage(pageNum)}>
                        {pageNum}
                    </S.PageButton>
                ))}
            </>
        )
    };

    return (
        <>
            <S.Wrapper>
                <S.Title>내가 공감한 글</S.Title>
                <S.Description>내가 지금까지 공감을 눌렀던 글을 한 눈에 모아서 볼 수 있어요.</S.Description>
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
                        <S.Icon $direction={direction} $size={"11px"} src={desc} onClick={() => handleClickDirection()} />
                    </S.SortArea>
                </S.TableHeader>
                <S.Table>
                        <colgroup>
                            <col style={{ width: "5%" }} />
                            <col style={{ width: "15%" }} />
                            <col style={{ width: "40%" }} />
                            <col style={{ width: "10%" }} />
                            <col style={{ width: "10%" }} />
                            <col style={{ width: "10%" }} />
                            <col style={{ width: "10%" }} />
                        </colgroup>
                    <thead>
                        <S.FirstRow>
                            <S.Field>번호</S.Field>
                            <S.Field>게시판</S.Field>
                            <S.Field>제목</S.Field>
                            <S.Field $align={"left"}>작성자</S.Field>
                            <S.Field>작성일</S.Field>
                            <S.Field>조회</S.Field>
                            <S.Field>추천</S.Field>
                        </S.FirstRow>
                    </thead>
                    <tbody>
                        {posts.map((post, index) => (
                            <S.Row key={post.postId}>
                                <S.Column>{direction === "DESC" ? posts.length - index : index+1}</S.Column>
                                <S.Column onClick={() => handleNavigateBoard(post.boardName)}>{post.boardKorean}</S.Column>
                                <S.Column $align={"left"} onClick={() => handleNavigatePost(post.boardName, post.postId)}>{post.title}{post.commentCnt > 0 ? (<S.Comment>{post.commentCnt}</S.Comment>) : ""}</S.Column>
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

export default MyEmpathizedPosts;