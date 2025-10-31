import styled from "styled-components";
import search from "@/assets/icon/etc/search.png";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 100%;
    border: 1px solid #E7E7E7;
    padding: 20px;
    gap: 20px;
`;

export const SearchInput = styled.input.attrs({
    type: "search"
})`
    padding: 0 12px;
    width: 60%;
    height: 35px;
    font-size: 12px;
    border: solid 2px #C6BC73;
    outline: none;
`;

export const SearchButton = styled.img.attrs({
    src: search
})`
    width: 35px;
    height: 35px;
    cursor: pointer;
`;