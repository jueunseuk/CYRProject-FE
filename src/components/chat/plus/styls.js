import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 30px;
    width: 100%;
    height: 100%;
    background: linear-gradient(180deg, #c6ecf8ff, white);
    border-radius: 10px;
    overflow: auto;

    &::-webkit-scrollbar {
        width: 7px;
    }

    &::-webkit-scrollbar-track {
        background: transparent;
    }

    &::-webkit-scrollbar-thumb {
        background-color: rgba(0, 0, 0, 0.2);
        border-radius: 10px;
        border: 2px solid transparent;
    }

    &::-webkit-scrollbar-thumb:hover {
        background-color: rgba(0, 0, 0, 0.4);
    }
`;

export const Input = styled.input`
    width: ${({$width}) => $width};
    padding: 12px 8px;
    border: none;
    border-radius: 6px;
`;

export const CancelIcon = styled.img`
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;

    &: hover {
        background-color: #c7e8f1ff;
    }
`;

export const Button = styled.button`
    padding: 10px 20px;
    font-size: 15px;
    font-weight: 600;
    border: none;
    border-radius: 8px;
    background-color: #d7f1f9;
    cursor: ${({disabled}) => (disabled ? "not-allowed" : "pointer")};
    margin-bottom: 70px;
    transition: all 0.2s ease;

    &:hover {
        scale: ${({disabled}) => disabled ? "" : "1.03"};
        box-shadow: ${({disabled}) => disabled ? "" : "0 0px 4px rgba(0, 0, 0, 0.1)"}
    }
`;