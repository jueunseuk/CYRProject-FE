import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const TitleArea = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    height: 24px;
`;

export const Text = styled.div`
    font-size: ${({$size}) => $size || "13px"};
    font-weight: ${({$weight}) => $weight || "400"};
    color: ${({$color}) => $color || "black"};
`;

export const Table = styled.table`
    width: 100%;
    min-height: 32.5px;
    border-collapse: collapse;
    border-top: 2px solid black;
`;

export const Row = styled.tr`
    border-top: 1px solid #B8B8B8;
    background-color: #fff9f9;

    &:hover {
        background-color: white;
    }
`;

export const FirstColumn = styled.td`
    padding: 8px;
    text-align: ${({$align}) => $align || "center"};
`;
    
export const Column = styled.td`
    padding: 8px;
    text-align: ${({$align}) => $align || "center"};
`;
