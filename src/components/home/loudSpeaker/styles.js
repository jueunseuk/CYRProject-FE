import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const TitleArea = styled.div`
    display: flex;
    gap: 5px;
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
    border-collapse: collapse;
    border-top: 2px solid black;
`;

export const Row = styled.tr`
    border-top: 1px solid #B8B8B8;

    &:hover {
        background-color:rgb(250, 250, 250);
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

export const Comment = styled.span`
    padding: 1px 4px;
    margin-left: 5px;
    font-size: 10px;
    color: red;
    border: 1px solid #B7B7B7;
    border-radius: 5px;
`;

export const TooltipWrapper = styled.div`
    position: relative;
    display: inline-block;

    &:hover span {
        visibility: visible;
        opacity: 1;
    }
`;

export const TooltipText = styled.span`
    position: absolute;
    bottom: 120%;
    left: 50%;
    transform: translateX(-50%);
    background-color: white;
    color: white;
    padding: 15px;
    border: 1px solid #9C9589;
    border-radius: 4px;
    white-space: nowrap;
    z-index: 1;

    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s ease;
`;