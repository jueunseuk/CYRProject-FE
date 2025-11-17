import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 100%;
    border: 1px solid #E7E7E7;
    padding: 20px;
    gap: 20px;
`;

export const QuoteWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 15px 20px;
    background-color: #fcf9e5ff;
    gap: 5px;
    border-left: 3px solid #C6BC73;
`;

export const TabWrapper = styled.div`
    position: relative;
    display: flex;
    border-bottom: 1px solid #cacaca;
    width: 100%;
`;

export const NavigateText = styled.div`
    text-align: center;
    font-size: 14px;
    font-weight: ${({ $active }) => ($active ? "600" : "400")};
    padding: 10px 25px;
    cursor: pointer;
    color: ${({ $active }) => ($active ? "black" : "#666")};
    background-color: ${({ $active }) => ($active ? "#f6f6f6" : "white")};
    border-top-left-radius: 7px;
    border-top-right-radius: 7px;
`;


export const Underline = styled.div`
    position: absolute;
    bottom: 0;
    height: 2px;
    width: ${({ $width }) => $width}px;
    background: black;
    transition: transform 0.3s ease;
    transform: translateX(${({ $offset }) => $offset}px);
`;

export const AchievementItem = styled.div`
    width: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
    padding: 10px;
    border-radius: 8px;
    transition: all 0.2s ease;
    border: 1px solid #eee;

    &:hover {
        scale: 1.01;
        box-shadow: 0 0 16px rgba(0, 0, 0, 0.1);
    }
`;