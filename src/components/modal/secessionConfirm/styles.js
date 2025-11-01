import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;   
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    z-index: 999;
`;

export const Content = styled.div`
    background-color: white;
    padding: 30px;
    border-radius: 10px;
    width: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 0px 16px rgb(0, 0, 0, 0.5);
    gap: 15px;
`;

export const Button = styled.button`
    font-size: 15px;
    padding: 8px 12px;
    background-color: ${({$bg}) => $bg};
    border: none;
    border-radius: 8px;
    cursor : ${({disabled}) => disabled ? "not-allowed" : "pointer"};
`;