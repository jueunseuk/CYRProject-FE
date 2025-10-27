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
    z-index: 100;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    animation: ${slideUp} 0.35s ease-out;
`;

export const TopIcon = styled.img`
    width: 33px;
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;

    &: hover {
        background-color: #eee;
    }
`;

export const ChatMessageWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column-reverse;
    justify-content: flex-start;
    width: 100%;
    height: 80%;
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

export const MessageItem = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 0 10px;
`;

export const ChatInput = styled.input.attrs({
    type: "text",
    placeholder: "메세지를 입력하세요.."
})`
    flex: 1;
    padding: 5px 15px;
    outline: none;
    border: 2px solid #1CA6FC;
    border-radius: 50px;
    margin: 15px 5px;
    font-size: 1epx;
`;

export const ImageWrapper = styled.div`
    position: fixed;
    width: 360px;
    display: flex;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.3);
`;

export const ImagePreview = styled.img`
    max-width: 360px;
    height: 150px;
    cursor: pointer;
    object-fit: contain;
`;

export const EmoticonWrapper = styled.div`
    position: fixed;
    width: 360px;
    max-height: 225px;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    background-color: rgba(0, 0, 0, 0.3);
    overflow: auto;

    &::-webkit-scrollbar {
        width: 0;
    }

    &::-webkit-scrollbar-track {
        background: transparent;
    }

    &::-webkit-scrollbar-thumb {
        background-color: rgba(255, 255, 255, 0.2);
        border-radius: 10px;
        border: 2px solid transparent;
    }

    &::-webkit-scrollbar-thumb:hover {
        background-color: rgba(255, 255, 255, 0.4);
    }
`;

export const EmoticonItem = styled.img`
    width: 90px;
    height: 90px;
    padding: 5px;
    cursor: pointer;
`;