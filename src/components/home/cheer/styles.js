import styled, { css, keyframes } from "styled-components";
import cheerBackground from "@/assets/image/cheer_bg.png"

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

export const CountText = styled.div`
    font-size: 16px;
    font-weight: 700;
    color: white;
    
    ${({ $animate }) =>
        $animate &&
        css`
        animation: ${spin} 0.4s ease;
    `}
`;

export const IconArea = styled.img`
    width: 13px;
    height: 13px;
`;

export const ContentArea = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 175px;
    background-image: url(${cheerBackground});
    background-size: 100% 100%;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100px;
    margin-left: 30px;
`;

export const CheerButton = styled.button`
    width: 70px;
    height: 25px;
    color: #9C9589;
    font-size: 13px;
    font-weight: 700;
    background-color: white;
    border: none;
    border-radius: 10px;
    margin-top : 30px;
    
    &:hover {
        cursor: pointer;
        background-color: #ebebebff;
    }
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

const spin = keyframes`
    0% { transform: rotateX(0deg); }
    50% { transform: rotateX(360deg); }
    100% { transform: rotateX(720deg); }
`;