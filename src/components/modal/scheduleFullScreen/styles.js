import styled from "styled-components";

export const Wrapper = styled.div`
    position: fixed;   
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 999;
`;

export const HorizontalWrapper = styled.div`
    display: flex;
    width: 100%;
    gap: ${({$gap}) => $gap};
    align-items: ${({$ai}) => $ai || "center"};
    justify-content: ${({$jc}) => $jc || "center"};
`;

export const VerticalWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: ${({$gap}) => $gap || "10px"};
    align-items: ${({$ai}) => $ai};
    justify-content: ${({$jc}) => $jc};
`;

export const Content = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    gap: 10px;
`;

export const Image = styled.img`
    max-width: 70vw;
    max-height: 70vh;
    object-fit: contain;
`;

export const Icon = styled.img`
    align-self: center;
    width: 28px;
    cursor: pointer;
    transition: transform 0.2s ease;
    
    &:hover {
        transform: scale(1.1);
    };
`;

export const Text = styled.span`
    font-size: 15px;
    font-weight: ${({$weight}) => $weight || "400"};
    color: white;
`;

export const Link = styled.a`
    font-size: 15px;
    font-weight: 400;
    color: white;
`;

export const NoImage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: #b7b7b7;
    background-color: #eee;
    width: 300px;
    height: 300px;
`;