import styled from "styled-components";

export const Table = styled.table`
    width: 100%;    
    border-collapse: collapse;
    border-top: 2px solid black;
`;

export const Row = styled.tr`
    border-top: 1px solid #B8B8B8;
    transition: background-color 0.2s ease;
    height: 100%;

    &:hover {
        background-color: #eee;
    }
`;

export const Column = styled.td`
    padding: 8px 0;
    text-align: ${({$align}) => $align || "center"};
    font-size: 13px;
    color: ${({$color}) => $color || "black"};
    font-weight: ${({$weight}) => $weight || "400"};
`;

export const FirstRow = styled.tr`
    border-top: 1px solid black;
    border-bottom: 1px solid #878787;
`;

export const Button = styled.button`
    outline: none;
    font-size: ${({$size}) => $size};
    cursor: pointer;
    padding: 1px 5px;
    display: flex;
    justify-content: center;
    align-items: center;
`; 

export const Select = styled.select`
    border: none;
    cursor: pointer;
    font-weight: 600;
    font-size: 14px;
    outline: none;
`;
    
export const Option = styled.option`
    font-size: 13px;
`;