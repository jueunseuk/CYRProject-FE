import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    border-radius: 25px;
    width: 100%;
    min-height: 517px;
`;

export const HorizontalWrapper = styled.div`
    display: flex;
    justify-content: ${({$jc}) => $jc || "center"};
    align-items: ${({$ai}) => $ai || "center"};
    gap: ${({$gap}) => $gap};
    width: 100%;
`;

export const VerticalWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: ${({$jc}) => $jc || "center"};
    align-items: ${({$ai}) => $ai || "center"};
    gap: ${({$gap}) => $gap};
    width: 100%;
`;

export const Text = styled.div`
    font-size: ${({$size}) => $size || "13px"};
    font-weight: ${({$weight}) => $weight || "400"};
    color: ${({$color}) => $color || "black"};
`;

export const TabWrapper = styled.div`
    position: relative;
    display: flex;
    border-bottom: 1px solid #cacaca;
    width: 100%;
`;

export const NavigateText = styled.div`
    text-align: center;
    font-size: 14px;
    font-weight: ${({ $active }) => ($active ? "600" : "400")};
    padding: 10px 25px;
    cursor: pointer;
    color: ${({ $active }) => ($active ? "black" : "#666")};
    background-color: ${({ $active }) => ($active ? "#f6f6f6" : "white")};
`;

export const Underline = styled.div`
    position: absolute;
    bottom: 0;
    height: 2px;
    width: ${({ $width }) => $width}px;
    background: black;
    transition: transform 0.3s ease;
    transform: translateX(${({ $offset }) => $offset}px);
`;