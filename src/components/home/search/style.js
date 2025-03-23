import styled from "styled-components";
import search from "@/assets/icon/etc/search.png";

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    gap: 3px;
    width: 100%;
    border-top: 2px solid black;
    padding: 10px 15px;
`;

export const SearchInput = styled.input.attrs({
    type: "search"
})`
    width: 147px;
    height: 20px;
    font-size: 12px;
    border: solid 2px #C6BC73;
    outline: none;
`;

export const SearchButton = styled.img.attrs({
    src: search
})`
    width: 20px;
    height: 20px;
`;
