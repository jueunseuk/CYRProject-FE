import styled from "styled-components";

export const Wrapper = styled.div`
    position: absolute;
    top: 30px;
    right: 0px;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 300px;
    padding: 8px 12px;
    z-index: 10;
    box-shadow: 0 0 14px rgba(0, 0, 0, 0.4);
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    &::before {
        content: "";
        position: absolute;
        top: -10px;
        right: 10px;
        width: 0;
        height: 0;
        border-left: 8px solid transparent;
        border-right: 8px solid transparent;
        border-bottom: 10px solid white;
        filter: drop-shadow(0 -2px 2px rgba(0,0,0,0.2));
    }
`;

export const NotificationItem = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    gap: 3px;
    padding: 5px 3px;
    transition: all 0.2s ease;
    border-radius: 5px;

    &:hover {
        background-color: #eee;
    }
`;