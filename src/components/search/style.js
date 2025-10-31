import styled from "styled-components";
import search from "@/assets/icon/etc/search.png";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 100%;
    border: 1px solid #E7E7E7;
    padding: 20px;
    gap: 30px;
`;

export const SearchInput = styled.input.attrs({
    type: "search"
})`
    padding: 0 12px;
    width: 50%;
    height: 35px;
    font-size: 15x;
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

export const SelectItem = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 3px;
    width: 90px;
    padding: 8px;
    font-size: 13px;
    font-weight: ${({$select}) => $select ? "600" : "400"};
    border-radius: 5px;
    cursor: pointer;
    background-color: ${({$select}) => $select ? "#f5ecb7ff" : ""};
    transition: background-color 0.2s ease;

    &:hover {
        background-color: #f5efd1ff;
    }
`;

export const PaginationArea = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 10px;
    font-size: 12px;
`;

export const PageButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20px;
    height: 20px;
    cursor: pointer;
    border: ${({$border}) => $border || "0px"} solid #C6BC73;
    color: #C6BC73;
    font-weight: ${({$weight}) => $weight || "400"};

    &:hover {
        text-decoration: underline;
    }
`;