import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
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
    margin-top: 10px;
`;

export const TableHeader = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 20px;
    margin-top: 20px;
`;

export const TextArea = styled.div`
    display: flex;
    align-items: center;
`;

export const Text = styled.div`
    font-size: ${({$size}) => $size || "13px"};
    font-weight: ${({$weight}) => $weight || "400"};
    color: ${({$color}) => $color || "black"};
`;

export const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
`;

export const Comment = styled.span`
    padding: 1px 4px;
    margin-left: 5px;
    font-size: 10px;
    color: red;
    border: 1px solid #B7B7B7;
    border-radius: 5px;
`;

export const FirstRow = styled.tr`
    border-top: 1px solid black;
    border-bottom: 1px solid #878787;
`;

export const Row = styled.tr`
    border-bottom: 1px solid #B8B8B8;
    width: 100%;

    &:hover {
        background-color: rgb(250, 250, 250);;
    }
`;

export const Field = styled.th`
    font-size: 14px;
    padding: 8px;
    text-align: ${({$align}) => $align || "center"};
`;

export const Column = styled.td`
    font-size: ${({$size}) => $size || "13px"};
    max-width: 350px;
    padding: 8px;
    text-align: ${({$align}) => $align || "center"};
    color: ${({$color}) => $color || "black"};
    overflow-x: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

export const PaginationArea = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 590px;
    gap: 10px;
    font-size: 12px;
    margin-top: 20px;
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