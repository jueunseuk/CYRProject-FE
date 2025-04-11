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
    color: ${({$color}) => $color};
`;

export const GradientText = styled.span`
  background: linear-gradient(90deg, #FFD153, #EF4C5E, #C837AB, #5956CA);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: ${({$weight}) => $weight || "400"};
  font-size: ${({$size}) => $size};
`;

export const CotentWrapper = styled.div`
    display: flex;
    gap: ${({$gap}) => $gap || "0"};
    justify-content: ${({$justify}) => $justify || "space-between"};
    align-items: ${({$align}) => $align || "center"};
    width: 100%;
    height: 175px;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${({$gap}) => $gap || "5px"};
    justify-content: ${({$justify}) => $justify || "flex-start"};
    align-items: ${({$align}) => $align || "center"};
    width: 100%;
    height: 175px;
    padding: 10px 0 0 0;
`;

export const PresentImage = styled.img`
    width: 45px;
    heigth: 45px;
    border-radius: 45px;
`;

export const LinkList = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    gap: 3px;
`;

export const ItemArea = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    gap: 3px;
`;

export const Icon = styled.div`
    width: 13px;
    height: 13px;
    background-image: url(${props => props.$icon});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
`;

export const Link = styled.a`
    text-decoration: none;
`;