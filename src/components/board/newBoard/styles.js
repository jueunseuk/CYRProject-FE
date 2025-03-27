import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    border: 1px solid #E7E7E7;
    padding: 20px;
`;

export const Title = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    font-size: 16px;
    font-weight: 600;
`;

export const Description = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    font-size: 13px;
`;

export const TableHeader = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;

`;

export const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
`;

export const Text = styled.div`
    font-size: ${({$size}) => $size || "13px"};
    font-weight: ${({$weight}) => $weight || "400"};
    color: ${({$color}) => $color || "black"};
`;

export const Row = styled.tr`
    border-top: 1px solid #B8B8B8;
    background-color: #FFF9F9;

    &:hover {
        background-color: white;
    }
`;

export const Field = styled.th`
    padding: 13px;
    text-align: ${({$align}) => $align || "center"};
`;

export const Column = styled.td`
    padding: 8px;
    text-align: ${({$align}) => $align || "center"};
`;
