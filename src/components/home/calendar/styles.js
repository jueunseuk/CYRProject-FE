import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-height: center;
    width: 275px;
`;

export const TitleArea = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 5px;
    padding: 5px 10px;
    height: 24px;
    border-bottom: 2px solid black;
    cursor: default;
`;

export const Text = styled.div`
    font-size: ${({$size}) => $size};
    font-weight: ${({$weight}) => $weight || "400"};
    color: ${({$color}) => $color}
`;

export const ContentArea = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: flex-start;
    height: 175px;
`;

export const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
`;

export const Row = styled.tr`
    height: 35px;
`;

export const Column = styled.td`
    padding: 0 5px;
    text-align: left;
    cursor: pointer;
    font-size: 13px;
    overflow: hidden;
`;

export const LeftDays = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    width: 45px;
    height: 22px;
    border-radius: 25px;
    color: white;
    background-color: ${({$bg}) => $bg};
`;