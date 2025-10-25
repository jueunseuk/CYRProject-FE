import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    overflow: auto;
    padding: 15px 0;

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

export const ChatListItem = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    border-bottom: 1px solid #ddd;
    width: 100%;
    padding: 10px 20px;
    gap: 10px;
    cursor: pointer;

    &: hover {
        background-color: #fafafa;
    }
`;