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

export const Content = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    gap: 10px;
    box-shadow: 0px 0px 16px rgb(0, 0, 0, 0.5);
`;

export const Image = styled.img`
    max-width: 85vw;
    max-height: 85vh;
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