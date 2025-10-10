import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-height: center;
    width: 275px;
`;

export const TitleArea = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 5px;
    padding: 5px 10px;
    height: 24px;
    border-bottom: 2px solid black;
    cursor: default;
`;

export const ListArea = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 5px;
`;

export const Text = styled.div`
    font-size: ${({$size}) => $size};
    font-weight: ${({$weight}) => $weight || "400"};
    color: ${({$color}) => $color};
`;

export const LinkText = styled.div`
    font-size: 15px;
    font-weight: 600;
    color: ${({$color}) => $color};
`;

export const GradientText = styled.span`
  background: linear-gradient(90deg, #FFD153, #EF4C5E, #C837AB, #5956CA);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: ${({$weight}) => $weight || "400"};
  font-size: ${({$size}) => $size};
`;

export const Content = styled.div`
    display: flex;
    gap: 25px;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: 175px;
    padding: 10px;
`;

export const PresentImage = styled.img`
    border-radius: 30px;
`;

export const LinkList = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 100%;
    height: 100%;
    gap: 5px;
`;

export const ItemArea = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    gap: 3px;

    &: hover {
        scale: 1.05;
    }
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