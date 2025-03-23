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
    justify-content: center;
    gap: 3px;
    align-items: center;
    width: 100%;
    height: 175px;
`;

export const LinkButton = styled.img`
    width: 275px;
    height: 40px;
    cursor: pointer;
`;