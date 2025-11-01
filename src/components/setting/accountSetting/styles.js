import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    width: 100%;
`;

export const Button = styled.button`
    width: 80px;
    padding: 8px 0;
    border: none;
    border-radius: 4px;
    font-size: 13px;
    font-weight: 500;
    color: red;
    outline: none;
    transition: all 0.2s ease;
    cursor: pointer;
    background-color: #eee;

    &:hover {
        background-color: #e4e4e4ff;
    }
`;