import * as S from "./styles";
import * as U from "@/apis/user";
import desc from "@/assets/icon/etc/descending.svg";
import { formatDate } from "@/util/dateFormatter";
import { useEffect, useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";

const UserComments = () => {
    const {userId} = useParams();
    const [userNickname, setUserNickname] = useState("");
    const [size, setSize] = useState(30);
    const [sort, setSort] = useState("createdAt");
    const [direction, setDirection] = useState("DESC");
    const [totalPage, setTotalPage] = useState(0);
    const [totalElements, setTotalElements] = useState(0);
    const [comments, setComments] = useState([]);
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

    const handleNavigatePost = (boardName, postId) => {
        navigate(`/${boardName}/${postId}`);
    };

    useEffect(() => {
        const fetchComments = async () => {
            try {
                const response = await U.getUserComments(userId, {page: page > 0 ? page - 1 : 0, sort, size, direction});
                setComments(response.data.content);
                setTotalElements(response.data.totalElements);
                setTotalPage(response.data.totalPages);
            } catch(error) {
                
            }
        };

        const fetchUser = async () => {
            try {
                const response = await U.getOtherProfileData(userId);
                setUserNickname(response.data.nickname);
            } catch(error) {

            }
        };
        
        fetchUser();
        fetchComments();
    }, [searchParams, size, direction]);

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
                <S.Title>{userNickname}님이 작성한 댓글</S.Title>
                <S.Description>{userNickname}님이 지금까지 작성했던 댓글들을 한 눈에 모아서 볼 수 있어요.</S.Description>
                <S.TableHeader>
                    <S.TextArea>
                        <S.Text $size={"11px"} $weight={"700"}>{totalElements}</S.Text>
                        <S.Text $size={"11px"}>개의 댓글</S.Text>
                    </S.TextArea>
                    <S.SortArea>
                        <S.Sort onClick={() => handleClickSort("createdAt")} $weight={sort === "createdAt" ? 700 : ""}>최신순</S.Sort>
                        <S.Icon $direction={direction} $size={"11px"} src={desc} onClick={() => handleClickDirection()} />
                    </S.SortArea>
                </S.TableHeader>
                <S.Table>
                        <colgroup>
                            <col style={{ width: "5%" }} />
                            <col style={{ width: "40%" }} />
                            <col style={{ width: "25%" }} />
                            <col style={{ width: "10%" }} />
                            <col style={{ width: "10%" }} />
                            <col style={{ width: "10%" }} />
                        </colgroup>
                    <thead>
                        <S.FirstRow>
                            <S.Field>번호</S.Field>
                            <S.Field>댓글 내용</S.Field>
                            <S.Field>제목</S.Field>
                            <S.Field>글쓴이</S.Field>
                            <S.Field>작성일</S.Field>
                            <S.Field>조회</S.Field>
                        </S.FirstRow>
                    </thead>
                    <tbody>
                        {comments.map((comment, index) => (
                            <S.Row key={comment.commentId}>
                                <S.Column>{direction === "DESC" ? comments.length - index : index+1}</S.Column>
                                <S.Column $align={"left"} onClick={() => handleNavigatePost(comment.boardName, comment.postId)}>{comment.content}</S.Column>
                                <S.Column $align={"left"} onClick={() => handleNavigatePost(comment.boardName, comment.postId)}>{comment.title}</S.Column>
                                <S.Column $align={"left"} $color={"#878787"} $size={"12px"}>{comment.author}</S.Column>
                                <S.Column $color={"#878787"} $size={"12px"}>{formatDate(comment.createdAt, 3)}</S.Column>
                                <S.Column $color={"#878787"} $size={"12px"}>{comment.viewCnt}</S.Column>
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

export default UserComments;