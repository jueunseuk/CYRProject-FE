import styled from "styled-components";
import search from "@/assets/icon/etc/search.png";

export const SearchInput = styled.input.attrs({
    type: "search"
})`
    padding: 0 8px;
    width: 145px;
    height: 25px;
    font-size: 12px;
    border: solid 2px #C6BC73;
    outline: none;
`;

export const SearchButton = styled.img.attrs({
    src: search
})`
    width: 25px;
    height: 25px;
`;

export const SelectItem = styled.div`
    display: flex;
    gap: 3px;
    width: 80px;
    padding: 5px 7px;
    font-size: 12px;
    font-weight: ${({$select}) => $select ? "600" : "400"};
    border-radius: 5px;
    cursor: pointer;
    background-color: ${({$select}) => $select ? "#eee" : ""};
    transition: background-color 0.2s ease;
`;