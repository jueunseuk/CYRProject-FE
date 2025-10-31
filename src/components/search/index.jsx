import * as S from "./style";
import * as SE from "@/apis/search";
import * as BC from "@/common/basic/BasicComponent";
import check from "@/assets/icon/etc/check.svg";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import NicknameSearch from "./nicknameSearch";
import TitleSearch from "./titleSearch";
import ContentSearch from "./contentSearch";
import CommentSearch from "./commentSearch";
import GallerySearch from "./gallerySearch";

const SearchComponent = () => {
    const [loading, setLoading] = useState(true);
    const [searchParams, setSearchParams] = useSearchParams();
    const [searchText, setSearchText] = useState(searchParams.get("keyword") || "");
    const [type, setType] = useState(searchParams.get("type") || "nickname");
    const [sort, setSort] = useState(searchParams.get("sort") || "createdAt");
    const [page, setPage] = useState(Number(searchParams.get("page")) || 0);
    const [size, setSize] = useState(Number(searchParams.get("size")) || 10);
    const [direction, setDirection] = useState(searchParams.get("direction") || "DESC");
    const [data, setData] = useState([]);
    const [pagination, setPagination] = useState({});

    useEffect(() => {
        fetchSearchData();
    }, [searchParams.toString()]);

    const fetchSearchData = async () => {
        try {
            setLoading(true);
            const response = await SE.getSearchResult({
                keyword: searchText,
                type,
                sort,
                page,
                size,
                direction,
            });

            setData(response.data.content);
            setPagination(response.data);
        } catch(error) {

        } finally {
            setLoading(false);
        }
    };

    const handleSearch = () => {
        setSearchParams({
            keyword: searchText,
            type,
            sort,
            page,
            size,
            direction,
        });
    };

    const handleClickPage = (pageNum) => {
        setPage(pageNum - 1);
        setSearchParams({
            keyword: searchText,
            type,
            sort,
            page: pageNum - 1,
            size,
            direction,
        });
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            handleSearch();
            fetchSearchData();
        }
    };

    const getTypeToKorean = (type) => {
        switch(type) {
            case "nickname": return "닉네임";
            case "title": return "제목";
            case "content": return "내용";
            case "comment": return "댓글";
            case "gallery": return "갤러리";
        }
    };

    const getSearchResultComponent = () => {
        switch(searchParams.get("type")) {
            case "nickname": return <NicknameSearch data={data} pagination={pagination} />;
            case "title": return <TitleSearch data={data} pagination={pagination} />;
            case "content": return <ContentSearch data={data} pagination={pagination} />;
            case "comment": return <CommentSearch data={data} pagination={pagination} />;
            case "gallery": return <GallerySearch data={data} pagination={pagination} />;
        }
    };

    const getPageComponent = () => {

        const pages = Array.from({ length: pagination.totalPages }, (_, i) => i + 1);

        return (
            <S.PaginationArea>
                {pages.map((pageNum) => (
                    <S.PageButton
                        key={pageNum}
                        $weight={page === pageNum - 1 ? "700" : "400"}
                        $border={page === pageNum - 1 ? "1px" : "0px"}
                        onClick={() => handleClickPage(pageNum)}
                    >
                        {pageNum}
                    </S.PageButton>
                ))}
            </S.PaginationArea>
        );
    };

    return (
        <>
            <S.Wrapper style={{backgroundColor: "#fcf9e5ff"}}>
                <BC.Text $size={"20px"} $weight={"600"} style={{textAlign: "center"}}>검색</BC.Text>
                <BC.VerticalWrapper $gap={"10px"}>
                    <BC.HorizontalWrapper $jc={"flex-start"} $ai={"center"} $gap={"10px"} style={{width: "100%"}}>
                        <BC.Text $size={"15px"} $weight={"700"}>검색 대상</BC.Text>
                        <BC.Text $size={"15px"} $weight={"700"} style={{margin: "0 5px"}}>|</BC.Text>
                        <S.SelectItem $select={type === "nickname"} onClick={() => setType("nickname")}>
                            닉네임
                            {type === "nickname" && <BC.Icon src={check} $w={"11px"} />}
                        </S.SelectItem>
                        <S.SelectItem $select={type === "title"} onClick={() => setType("title")}>
                            제목
                            {type === "title" && <BC.Icon src={check} $w={"11px"} />}
                        </S.SelectItem>
                        <S.SelectItem $select={type === "content"} onClick={() => setType("content")}>
                            내용
                            {type === "content" && <BC.Icon src={check} $w={"11px"} />}
                        </S.SelectItem>
                        <S.SelectItem $select={type === "comment"} onClick={() => setType("comment")}>
                            댓글
                            {type === "comment" && <BC.Icon src={check} $w={"11px"} />}
                        </S.SelectItem>
                        <S.SelectItem $select={type === "gallery"} onClick={() => setType("gallery")}>
                            갤러리
                            {type === "gallery" && <BC.Icon src={check} $w={"11px"} />}
                        </S.SelectItem>
                    </BC.HorizontalWrapper>
                    <BC.HorizontalWrapper $jc={"flex-start"} $ai={"center"} $gap={"10px"} style={{width: "100%"}}>
                        <BC.Text $size={"15px"} $weight={"700"}>정렬 기준</BC.Text>
                        <BC.Text $size={"15px"} $weight={"700"} style={{margin: "0 5px"}}>|</BC.Text>
                        <S.SelectItem $select={sort === "createdAt"} onClick={() => setSort("createdAt")}>
                            최신순
                            {sort === "createdAt" && <BC.Icon src={check} $w={"11px"} />}
                        </S.SelectItem>
                    </BC.HorizontalWrapper>
                    <BC.HorizontalWrapper $jc={"flex-start"} $ai={"center"} $gap={"10px"} style={{width: "100%"}}>
                        <BC.Text $size={"15px"} $weight={"700"}>정렬 방향</BC.Text>
                        <BC.Text $size={"15px"} $weight={"700"} style={{margin: "0 5px"}}>|</BC.Text>
                        <S.SelectItem $select={direction === "DESC"} onClick={() => setDirection("DESC")}>
                            내림차순
                            {direction === "DESC" && <BC.Icon src={check} $w={"11px"} />}
                        </S.SelectItem>
                        <S.SelectItem $select={direction === "ASC"} onClick={() => setDirection("ASC")}>
                            오름차순
                            {direction === "ASC" && <BC.Icon src={check} $w={"11px"} />}
                        </S.SelectItem>
                    </BC.HorizontalWrapper>
                </BC.VerticalWrapper>
                <BC.HorizontalWrapper $jc={"center"}>
                    <S.SearchInput type="search" value={searchText} onKeyDown={handleKeyDown} onChange={(e) => setSearchText(e.target.value)} placeholder={`${getTypeToKorean(type)}(으)로 검색..`} />
                    <S.SearchButton onClick={handleSearch} />
                </BC.HorizontalWrapper>
            </S.Wrapper>
            <S.Wrapper>
                {loading ? <BC.EmptyBox $w={"100%"} $h={"300px"} $size={"15px"}>로딩 중..</BC.EmptyBox>
                    :
                    data.length === 0 ? 
                    <BC.EmptyBox $w={"100%"} $h={"100px"} $size={"15px"}>검색 결과가 존재하지 않습니다..</BC.EmptyBox>
                    :
                    <>
                        {getSearchResultComponent()}
                        {getPageComponent()}
                    </>
                }
            </S.Wrapper>
        </>
    );
};

export default SearchComponent;