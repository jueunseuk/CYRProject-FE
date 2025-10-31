import * as S from "./style";
import * as SE from "@/apis/search";
import * as BC from "@/common/basic/BasicComponent";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const SearchComponent = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [searchText, setSearchText] = useState(searchParams.get("keyword") || "");
    const [type, setType] = useState(searchParams.get("type") || "nickname");
    const [sort, setSort] = useState(searchParams.get("sort") || "createdAt");
    const [page, setPage] = useState(Number(searchParams.get("page")) || 0);
    const [size, setSize] = useState(Number(searchParams.get("size")) || 20);
    const [direction, setDirection] = useState(searchParams.get("direction") || "DESC");
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchSearchData();
    }, [searchParams.toString()]);

    const fetchSearchData = async () => {
        try {
            const response = await SE.getSearchResult({
                keyword: searchText,
                type,
                sort,
                page,
                size,
                direction,
            });

            setData(response.data.content);
        } catch(error) {

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

    const getTypeToKorean = (type) => {
        switch(type) {
            case "nickname": return "닉네임";
            case "title": return "제목";
            case "content": return "내용";
            case "comment": return "댓글";
            case "gallery": return "갤러리";
        }
    };

    return (
        <S.Wrapper>
            <BC.Text $size={"20px"} $weight={"600"} style={{textAlign: "center"}}>검색</BC.Text>
            <BC.HorizontalWrapper $jc={"center"}>
                <S.SearchInput type="search" value={searchText} onChange={(e) => setSearchText(e.target.value)} />
                <S.SearchButton onClick={handleSearch} />
            </BC.HorizontalWrapper>
            <BC.HorizontalWrapper $jc={"space-between"} $ai={"center"} style={{width: "100%"}}>

            </BC.HorizontalWrapper>
        </S.Wrapper>
    );
};

export default SearchComponent;