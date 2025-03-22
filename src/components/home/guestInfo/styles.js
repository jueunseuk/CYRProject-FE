import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    width: 100%;
    border-top: 2px solid black;
    padding: 15px 0;
`;

export const Title = styled.div`
    display: flex;
    justify-content: center;
    font-size: 16px;
    font-weight: 600;
`;

export const LoginButton = styled.button`
    width: 170px;
    height: 30px;
    background-color: #C6BC73;
    color: white;
    font-size: 13px;
    border: none;
    cursor: pointer;
`;

export const HorizontalWrapper = styled.div`
    display: flex;
    justify-content: center;
    gap: 4px;
`;

export const LinkText = styled.div`
    color: #B8B8B8;
    font-size: 11px;
    text-decoration: underline;
    cursor: pointer;
`;