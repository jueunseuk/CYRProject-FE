import * as S from "./style";
import * as BC from "@/common/basic/BasicComponent";
import check from "@/assets/icon/etc/check.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Search = () => {
    const [selectType, setSelectType] = useState("nickname");
    const [query, setQuery] = useState("");
    const [sort, setSort] = useState("createdAt");
    const [direction, setDirection] = useState("DESC");
    const navigate = useNavigate();

    const handleSearchNavigate = () => {
        navigate(`/search?type=${selectType}&keyword=${query}&sort=${sort}&direction=${direction}`);
    };

    const handleSearch = (e) => {
        if (e.key === "Enter") {
            handleSearchNavigate();
        }
    };

    return (
        <>
            <BC.VerticalWrapper $gap={"10px"} style={{borderTop: "2px solid black", padding: "10px 15px"}}>
                <BC.Text $size={"16px"} $weight={"600"}>커뮤니티 내 검색</BC.Text>
                <BC.HorizontalWrapper $jc={"space-between"} style={{width: "100%", flexWrap: "wrap"}}>
                    <S.SelectItem $select={selectType === "nickname"} onClick={() => setSelectType("nickname")}>
                        닉네임
                        {selectType === "nickname" && <BC.Icon src={check} $w={"11px"} />}
                    </S.SelectItem>
                    <S.SelectItem $select={selectType === "title"} onClick={() => setSelectType("title")}>
                        제목
                        {selectType === "title" && <BC.Icon src={check} $w={"11px"} />}
                    </S.SelectItem>
                    <S.SelectItem $select={selectType === "content"} onClick={() => setSelectType("content")}>
                        내용
                        {selectType === "content" && <BC.Icon src={check} $w={"11px"} />}
                    </S.SelectItem>
                    <S.SelectItem $select={selectType === "comment"} onClick={() => setSelectType("comment")}>
                        댓글
                        {selectType === "comment" && <BC.Icon src={check} $w={"11px"} />}
                    </S.SelectItem>
                    <S.SelectItem $select={selectType === "gallery"} onClick={() => setSelectType("gallery")}>
                        갤러리
                        {selectType === "gallery" && <BC.Icon src={check} $w={"11px"} />}
                    </S.SelectItem>
                </BC.HorizontalWrapper>
                <BC.HorizontalWrapper>
                    <S.SearchInput onKeyDown={handleSearch} value={query} onChange={(e) => setQuery(e.target.value)} />
                    <S.SearchButton onClick={handleSearchNavigate} />
                </BC.HorizontalWrapper>
            </BC.VerticalWrapper>
        </>
    );
}

export default Search;