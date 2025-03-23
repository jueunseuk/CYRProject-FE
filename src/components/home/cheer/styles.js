import styled from "styled-components";
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
    background-color: black;
    color: white;
    padding: 0 15px;
    border-radius: 4px;
    white-space: nowrap;
    z-index: 1;

    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s ease;
`;
