import styled, { keyframes } from "styled-components";

export const slideUp = keyframes`
    from {
        transform: translateY(40px);
        opacity: 0;
    }
    
    to {
        transform: translateY(0);
        opacity: 1;
    }
`;

export const Wrapper = styled.div`
    position: fixed;
    width: 360px;
    height: 70%;
    min-height: 400px;
    bottom: 25px;
    right: 25px;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);
    z-index: 99;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    animation: ${slideUp} 0.35s ease-out;
`;

export const CancelIcon = styled.img`
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;

    &: hover {
        background-color: #eee;
    }
`;

export const NavItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    padding: 10px 0;
    margin: 5px;
    width: 100%;
    border-radius: 10px;
    cursor: pointer;
    background-color: ${({$bg}) => $bg};
`;