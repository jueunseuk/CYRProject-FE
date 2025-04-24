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
    gap: 8px;
    height: 175px;
    padding: 5px 5px;
`;

export const HorizontalWrapper = styled.div`
    display: flex;
    justify-content: ${({$justify}) => $justify || "flex-start"};
    align-items: ${({$align}) => $align || "center"};
    gap: 10px;
    width: 100%;
`;

export const LeftDays = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    border-radius: 25px;
    color: white;
    background-color: ${({$bg}) => $bg};
    width: 45px;
    height: 25px;
`;