import * as S from "./style";
import * as BC from "@/common/basic/BasicComponent";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

const SearchComponent = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [sort, setSort] = useState("createdAt");
    const [size, setSize] = useState(30);
    const [page, setPage] = useState(0);
    const [direction, setDirection] = useState("ASC");
    const [searchText, setSearchText] = useState("");

    return (
        <S.Wrapper>
            검색하기
        </S.Wrapper>
    );
};

export default SearchComponent;